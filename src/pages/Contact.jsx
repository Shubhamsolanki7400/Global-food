import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactDetail from '../components/ContactDetail';
const Contact = () => {


  return (
   <>
    <div
        className="services-banner"
        style={{
          backgroundImage: `url(${require('../../src/assets/images/Contact-Us-Banner.webp')})`,
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Contact Us</h1>
      </div>
   <ContactDetail/>
   </>
    
  );
}

export default Contact