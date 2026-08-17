import TermsContent from '@/components/TermsOfService/TermsContent'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'

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