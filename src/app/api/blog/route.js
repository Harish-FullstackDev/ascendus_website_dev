import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabaseClient';
 
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')          // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}
 
export async function POST(request) {
  try {
    const formData = await request.formData();
   
    const title = formData.get('title');
    const author = formData.get('author');
    const publishDate = formData.get('publish_date');
    const coverImageFile = formData.get('image');
    const sectionsRaw = formData.get('sections');
 
    if (!title?.trim() || !author?.trim() || !publishDate || !coverImageFile || !sectionsRaw) {
      return NextResponse.json({ error: 'All fields including cover image and sections are required.' }, { status: 400 });
    }
 
    const sections = JSON.parse(sectionsRaw);
    const supabase = createAdminClient();
 
    // 1. Generate unique slug from title
    let slug = slugify(title);
    const { data: existingBlogs } = await supabase
      .from('blogs')
      .select('id')
      .eq('slug', slug);
 
    if (existingBlogs && existingBlogs.length > 0) {
      slug = `${slug}-${Math.random().toString(36).substring(2, 7)}`;
    }
 
    // 2. Upload cover image to Supabase Storage using Admin client (bypasses RLS)
    const coverExt = coverImageFile.name.split('.').pop();
    const coverFileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${coverExt}`;
    const coverPath = `uploads/${coverFileName}`;
 
    const coverBuffer = Buffer.from(await coverImageFile.arrayBuffer());
 
    const { error: coverUploadError } = await supabase.storage
      .from('blog-images')
      .upload(coverPath, coverBuffer, {
        contentType: coverImageFile.type,
        cacheControl: '3600',
        upsert: false,
      });
 
    if (coverUploadError) {
      console.error('Cover image upload error:', coverUploadError);
      return NextResponse.json({ error: `Failed to upload cover image: ${coverUploadError.message}` }, { status: 500 });
    }
 
    // Resolve cover image public URL
    const { data: { publicUrl: coverUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(coverPath);
 
    if (!coverUrl) {
      return NextResponse.json({ error: 'Failed to retrieve public access URL for cover image.' }, { status: 500 });
    }
 
    // 3. Upload section images dynamically and build the final sections JSONB array
    const processedSections = [];
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      let sectionImageUrl = null;
 
      // Check if this section has an associated file uploaded under a placeholder key
      if (section.image && section.image.startsWith('section_image_')) {
        const fileKey = section.image;
        const sectionImageFile = formData.get(fileKey);
 
        if (sectionImageFile) {
          const secExt = sectionImageFile.name.split('.').pop();
          const secFileName = `${Date.now()}-sec-${i}-${Math.random().toString(36).substring(2, 6)}.${secExt}`;
          const secPath = `uploads/${secFileName}`;
          const secBuffer = Buffer.from(await sectionImageFile.arrayBuffer());
 
          const { error: secUploadError } = await supabase.storage
            .from('blog-images')
            .upload(secPath, secBuffer, {
              contentType: sectionImageFile.type,
              cacheControl: '3600',
              upsert: false,
            });
 
          if (secUploadError) {
            console.error(`Section ${i} image upload error:`, secUploadError);
            return NextResponse.json({ error: `Failed to upload image for section ${i + 1}: ${secUploadError.message}` }, { status: 500 });
          }
 
          const { data: { publicUrl: secUrl } } = supabase.storage
            .from('blog-images')
            .getPublicUrl(secPath);
 
          sectionImageUrl = secUrl;
        }
      }
 
      processedSections.push({
        heading: section.heading?.trim() || '',
        content: section.content?.trim() || '',
        image: sectionImageUrl,
        caption: section.caption?.trim() || null
      });
    }
 
    // 4. Insert blog row into Supabase 'blogs' table
    const { data: blogData, error: insertError } = await supabase
      .from('blogs')
      .insert({
        title: title.trim(),
        slug: slug,
        author: author.trim(),
        publish_date: publishDate,
        cover_image: coverUrl,
        sections: processedSections,
      })
      .select()
      .single();
 
    if (insertError) {
      console.error('Blog details insert error:', insertError);
      return NextResponse.json({ error: `Failed to save blog details: ${insertError.message}` }, { status: 500 });
    }
 
    return NextResponse.json({ success: true, blog: blogData }, { status: 201 });
 
  } catch (err) {
    console.error('Blog API Error:', err);
    return NextResponse.json({ error: err.message || 'Server error during blog posting.' }, { status: 500 });
  }
}
 