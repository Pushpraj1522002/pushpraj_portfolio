import "./AboutContentStyle.css"
import { Link } from "react-router-dom"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/intro.jpg"

import React from 'react'


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p> i am react front end developer. i create responsive secure website for my clients.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={img1} className="img"/>
            </div>
            <div className="img-stack bottom">
                <img src={img2} className="img"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
