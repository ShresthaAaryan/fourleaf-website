"use client";
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/footer/Footer";
import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'contact':
        setContact(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backendfourleafclover.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'general', name, contact, email, message }),
      });
      
      if (response.ok) {
        alert('Email sent successfully!');
        setName('');
        setContact('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <>
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="map-container">
          <iframe
            title="Google Map"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.1149048660317!2d85.32103663226579!3d27.703091928055542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199f55d5f795%3A0xa6dbb597faeda135!2sFour%20Leaf%20Clover%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1725788575275!5m2!1sen!2sin"
            allow="fullscreen"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="form-container"><br />
          <h2>Feedback</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={handleChange} required />
            <input type="tel" id="contact" name="contact" placeholder="Contact Number" value={contact} onChange={handleChange} />
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
            <textarea id="message" name="message" placeholder="Message" value={message} onChange={handleChange} required></textarea>
            <button type="submit" className='button'>Send</button>
          </form>
        </div>
      </div><br /><br />
    </div>
    <Footer />
    </>
  );
}

export default Contact;
