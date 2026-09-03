export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type IndustryVertical =
  | 'Oil & Gas'
  | 'Manufacturing'
  | 'Finance'
  | 'Healthcare'
  | 'Retail'
  | 'Construction'
  | 'Public Sector';

export type InquiryOrigin =
  | 'Contact Form'
  | 'Service Detail'
  | 'Callback Request'
  | 'Newsletter';

export type JobApplicationStatus =
  | 'New'
  | 'Reviewed'
  | 'Shortlisted'
  | 'Interviewing'
  | 'Rejected'
  | 'Hired';

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string | null;
          company: string | null;
          company_size: string | null;
          industry: IndustryVertical | null;
          problem_summary: string | null;
          status: 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost' | 'Rejected';
          lead_source: string;
          marketing_campaign_id: string | null;
          consent_given: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          first_name: string;
          last_name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          company_size?: string | null;
          industry?: IndustryVertical | null;
          problem_summary?: string | null;
          status?: 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost' | 'Rejected';
          lead_source: string;
          marketing_campaign_id?: string | null;
          consent_given?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['leads']['Insert']>;
        Relationships: [];
      };
      inquiries: {
        Row: {
          id: string;
          lead_id: string;
          service_id: string | null;
          message: string;
          inquiry_type: InquiryOrigin;
          preferred_callback_time: string | null;
          utm_metadata: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          lead_id: string;
          service_id?: string | null;
          message: string;
          inquiry_type: InquiryOrigin;
          preferred_callback_time?: string | null;
          utm_metadata?: Json;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['inquiries']['Insert']>;
        Relationships: [];
      };
      services: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          category: string;
          base_price: number | null;
          is_active: boolean;
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description: string;
          category: string;
          base_price?: number | null;
          is_active?: boolean;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['services']['Insert']>;
        Relationships: [];
      };
      customers: {
        Row: {
          id: string;
          lead_id: string;
          company_name: string;
          industry: IndustryVertical;
          contact_email: string;
          contact_phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          lead_id: string;
          company_name: string;
          industry: IndustryVertical;
          contact_email: string;
          contact_phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['customers']['Insert']>;
        Relationships: [];
      };
      marketing_campaigns: {
        Row: {
          id: string;
          campaign_name: string;
          source: string;
          medium: string | null;
          utm_term: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          campaign_name: string;
          source: string;
          medium?: string | null;
          utm_term?: string | null;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['marketing_campaigns']['Insert']>;
        Relationships: [];
      };
      blogs: {
        Row: {
          id: string;
          title: string;
          slug: string;
          cover_image: string;
          author: string;
          publish_date: string;
          sections: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          cover_image: string;
          author: string;
          publish_date?: string;
          sections?: Json;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['blogs']['Insert']>;
        Relationships: [];
      };
      case_studies: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          summary: string;
          cover_image: string;
          publish_date: string;
          author: string;
          meta_line: string | null;
          tags: string[];
          highlights: Json;
          sections: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          summary: string;
          cover_image: string;
          publish_date?: string;
          author: string;
          meta_line?: string | null;
          tags?: string[];
          highlights?: Json;
          sections?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['case_studies']['Insert']>;
        Relationships: [];
      };
      white_papers: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          summary: string;
          cover_image: string;
          publish_date: string;
          author: string;
          meta_line: string | null;
          tags: string[];
          file_info: string | null;
          download_url: string | null;
          sections: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          summary: string;
          cover_image: string;
          publish_date?: string;
          author: string;
          meta_line?: string | null;
          tags?: string[];
          file_info?: string | null;
          download_url?: string | null;
          sections?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['white_papers']['Insert']>;
        Relationships: [];
      };
      jobs: {
        Row: {
          id: string;
          slug: string;
          title: string;
          company: string;
          location: string;
          mode_of_work: string;
          type_of_work: string;
          experience_level: string;
          posted_at: string;
          categories: string[];
          about_job: string;
          responsibilities: string[];
          qualifications: string[];
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          company?: string;
          location: string;
          mode_of_work?: string;
          type_of_work?: string;
          experience_level: string;
          posted_at?: string;
          categories?: string[];
          about_job?: string;
          responsibilities?: string[];
          qualifications?: string[];
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['jobs']['Insert']>;
        Relationships: [];
      };
      job_applications: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          address_line1: string;
          address_line2: string | null;
          city: string;
          state: string;
          zip: string;
          country: string;
          position: string;
          experience: string;
          job_title: string | null;
          employer: string | null;
          key_skills: string;
          cover_letter: string | null;
          resume_path: string;
          resume_filename: string;
          start_date: string;
          current_salary: string | null;
          expected_salary: string | null;
          linkedin: string | null;
          portfolio: string | null;
          ref_name: string | null;
          ref_relationship: string | null;
          ref_email: string | null;
          ref_phone: string | null;
          hear_about: string | null;
          consent_given: boolean;
          status: JobApplicationStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          address_line1: string;
          address_line2?: string | null;
          city: string;
          state: string;
          zip: string;
          country: string;
          position: string;
          experience: string;
          job_title?: string | null;
          employer?: string | null;
          key_skills: string;
          cover_letter?: string | null;
          resume_path: string;
          resume_filename: string;
          start_date: string;
          current_salary?: string | null;
          expected_salary?: string | null;
          linkedin?: string | null;
          portfolio?: string | null;
          ref_name?: string | null;
          ref_relationship?: string | null;
          ref_email?: string | null;
          ref_phone?: string | null;
          hear_about?: string | null;
          consent_given?: boolean;
          status?: JobApplicationStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['job_applications']['Insert']>;
        Relationships: [];
      };
    };
    // Required by @supabase/supabase-js v2 GenericSchema constraint:
    // GenericSchema = { Tables: Record<string, GenericTable>; Views: Record<string, GenericView>; Functions: Record<string, GenericFunction> }
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
