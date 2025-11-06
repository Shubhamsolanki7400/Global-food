import React from 'react';
import '../styles/Banner.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactDetail = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
    .then(() => {
      toast.success("Message sent successfully!");
      form.reset();
    })
    .catch(() => {
      toast.error("Something went wrong. Please try again.");
    });
  };

  return (
    <>
      <section className="contact_us">
         {/* Banner Section */}
      <div
        className="services-banner"
        style={{
          backgroundImage: `url(${require('../../src/assets/images/Service.jpg')})`,
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Contact Us</h1>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Get in Touch</h3>
                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!</p>

                        {/* FORM START */}
                        <form onSubmit={handleSubmit} action="https://getform.io/f/ajjmpxza" method="POST">
                          <input type="text" name="name" className="form-control form-group" placeholder="Name" required />
                          <input type="email" name="email" className="form-control form-group" placeholder="Email" required />
                          <textarea name="message" className="form-control form-group" placeholder="Message" required></textarea>
                          <button type="submit" className="contact_form_submit">Send</button>
                        </form>
                        {/* FORM END */}

                      </div>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="right_conatct_social_icon d-flex align-items-end">
                      {/* Add social icons here if needed */}
                    </div>
                  </div>
                </div>

                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
 <div className="d-flex info_single align-items-center">
                    <div className='cls'>
                    <i className="fas fa-headset"></i>
                    <span>+91 9993120085</span>
                    
                   
                    <div className='ps-5'>+91 9993120085</div>
                  </div>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-envelope-open-text"></i>
                    <span>info@globalfoodsproduct.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-map-marked-alt"></i>
                    <span>204, Bansiwala Tower, Above Morni Sarees, Sapna Sangeeta Road, Indore, Madhya Pradesh, 452001 India</span>
                  </div>
                  <div className="socil_item_inner">
                  <ul className='d-flex'>
  <li>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2",fontSize:"24px" }}>
      <i className="fab fa-facebook-square"></i>
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C",fontSize:"24px" }}>
      <i className="fab fa-instagram"></i>
    </a>
  </li>
  <li>
    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366",fontSize:"24px" }}>
      <i className="fab fa-whatsapp"></i>
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#0A66C2",fontSize:"24px" }}>
      <i className="fab fa-linkedin"></i>
    </a>
  </li>
</ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                <div className="map_bind">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toaster */}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default ContactDetail;
