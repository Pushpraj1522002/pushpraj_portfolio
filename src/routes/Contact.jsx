import React from 'react'
import Nevbar from '../components/Nevbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Nevbar/>
      <Heroimg2 heading="CONTACT." text="Reach me"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
