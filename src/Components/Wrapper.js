import React from 'react'

import Navbar from './Navbar'
import Slider from './Slider'
import Team from './Team'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Collections from './Collections'
import ContactUs from './ContactUs'

function Wrapper() {
  return (
    <div >
        <Navbar/>
        <Slider/>
        <Team/>
        <AboutUs/>
        <Collections/>        
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Wrapper