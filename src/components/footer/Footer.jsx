'use client'

import Logo from "../../images/logo.jpg"
import Image from "next/image";
import React from 'react';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import './FooterOverlay';
import './Footer.css';

function face(){
  window.open('https://www.facebook.com', '_blank');
}
function insta(){
  window.open('https://instagram.com','_blank');
}

const Footer = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact" id='contact'>
        <h1 className="app__footer-headtext">Contact Us</h1>
        <h3 className="p__opensans">Ichhamati Galli 28, Kathmandu 44600, Nepal</h3>
        <h4 className="p__opensans">ghumti.au@gmail.com</h4>
        <h4 className="p__opensans">+977 9843027055</h4>
        {/* <h4 className='p__opensans'>ABN: 63638902593</h4> */}
      </div>

      <div className="app__footer-links_logo">
        <Image src={Logo} alt="footer_logo" width={150} height={150} />
        {/* <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p> */}
        <div className="app__footer-links_icons">
          <FiFacebook onClick={face} />
          <FiInstagram onClick={insta} />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <h3 className="p__opensans">Monday-Friday:</h3>
        <p className="p__opensans">06:00 am - 03:00 pm</p>
        <h3 className="p__opensans">Saturday-Sunday:</h3>
        <p className="p__opensans">Closed</p>
      </div>
    </div>
    <div className="footer__copyright">    
      <hr  style={{
          color: 'black',
          backgroundColor: 'black',
          height: .5,
          width: '100%',
          borderColor : 'black'
      }}/>
    </div>

  </div>
);

export default Footer;