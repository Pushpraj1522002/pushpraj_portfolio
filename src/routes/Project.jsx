import React from 'react'
import Nevbar from '../components/Nevbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import PricingCards from '../components/PricingCards'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Nevbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work />
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project;