import React from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import About from './About/About'
import HowItWorks from './HowItWorks/HowItWorks'
import Testimonials from './Testimonials/Testimonials'
import FAQ from './FAQ/FAQ'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const LandingPage:React.FC = () => {
  return (
    <div className='w-full h-full overflow-y-auto flex flex-col justify-center items-center'>
      <NavBar />
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage
