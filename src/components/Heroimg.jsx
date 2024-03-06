import "./HeroimgStyle.css";
import React from 'react';
import IntroImg from "../assets/TEXTURE1.jpg";
import {Link} from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg}/>
        </div>
      <div className="content">
        <p>HI, I'M A STUDENT.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contacts</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
