import "./FooterStyle.css"

import React from 'react'
import {FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="location">
                    <FaHome size={20} style={{color: "white",marginRight:"2rem"}}/>
                    <div>
                        <p>Nanadi</p>
                        <p>chikodi-125944.</p>
                        <p>Belgavi, Karnataka, India.</p>
                    </div>
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "white",marginRight:"2rem"}}/>+19 636-279-6267</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "white",marginRight:"2rem"}}/>pushpraj.desai2020@gmail.com</h4>
                </div>
                
            </div>


            <div className="right">
                <h4>About the Studies</h4>
                <p>This is Pushpraj Desai. Currently Studying B.Tech CSE in PES University. I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                    <FaInstagram size={30} style={{color: "white",marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color: "white",marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color: "white",marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
