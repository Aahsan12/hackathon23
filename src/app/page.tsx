import Ceramics from '@/components/ceramics'
import EmailSignUp from '@/components/emailsignup'
import Feature2 from '@/components/feature2'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Listing from '@/components/listing'

import Product from './productlisting/page'



import React from 'react'



const page = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Ceramics/>
        <Listing/>
        <EmailSignUp/>
        <Feature2/>
        <Footer/>
        <Product/>
        
    </div>
  )
}

export default page