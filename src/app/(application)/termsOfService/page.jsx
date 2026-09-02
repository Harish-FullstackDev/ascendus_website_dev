import TermsContent from '@/components/TermsOfService/TermsContent'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'

export const metadata = {
  alternates: { canonical: "/termsOfService" },
  title: "Terms & Conditions",
  description: "The terms governing your use of the Ascendus website, including acceptable use, intellectual property and limitation of liability.",
  openGraph: {
    title: "Terms & Conditions | Ascendus",
    description: "The terms governing your use of the Ascendus website, including acceptable use, intellectual property and limitation of liability.",
    url: "/termsOfService",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascendus" }],
  },
}

const page = () => {
  return (
    <div>
      <Navbar />
      <TermsContent />
      <Footer />
    </div>
  )
}

export default page