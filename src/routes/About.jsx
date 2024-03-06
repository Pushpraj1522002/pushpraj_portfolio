import React from 'react'
import Nevbar from '../components/Nevbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'



const About = () => {
  return (
    <div>
      <Nevbar/>
      <Heroimg2 heading="ABOUT." text="Im a friendly Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
