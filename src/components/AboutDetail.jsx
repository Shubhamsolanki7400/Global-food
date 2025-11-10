import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/About.css'
import aboutus from '../assets/images/Aboutus.jpg'
const AboutDetail = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      {/* Hero Section - Dark Background with Image */}
       <div style={{ textAlign: 'center' }}>
            <h2
              className="section-title mb-3 pt-5"
              style={{
                display: 'inline-block',
                position: 'relative',
                paddingBottom: '10px',
              }}
            >
              About Us
              <span
                style={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  borderRadius: '2px',
                  background: 'linear-gradient(90deg, #5294ea, #42b883)',
                }}
              ></span>
            </h2>
          </div>
      <section 
        className="position-relative"
        style={{ 
         
          minHeight: '600px',
          overflow: 'hidden'
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center" style={{ minHeight: '500px' }}>
            {/* Left Content */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h1 
                  className="abt-dethead text-black mb-4" 
                  style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: '700',
                    lineHeight: '1.2'
                  }}
                >
                  Discover Our Journey <br />
                  <span style={{ color: '#fbbf24' }}>Feel Nature</span><br />
                </h1>
                <p 
                  className="text-black mb-4" 
                  style={{ 
                    fontSize: '1.1rem',
                    opacity: 0.9,
                    maxWidth: '500px'
                  }}
                >
                  We export our premium products to key markets worldwide, including the USA, Europe, and Latin America, establishing a global footprint of trust and reliability.

Our ultimate goal is to ensure profitability and add value to our customers' businesses by building long-term relationships through exceptional product quality, outstanding customer service, and reliable, on-time delivery.
                </p>
                <div className="abt-expmore d-flex gap-3">
                  <Link to="/about" className="text-decoration-none">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                      background: 'linear-gradient(135deg, rgb(236, 72, 153), rgb(147, 51, 234))',
                        color: 'white',
                        padding: '14px 32px',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(251, 191, 36, 0.3)'
                      }}
                    >
                      Explore More
                    </motion.button>
                  </Link>
                  
                </div>
               
              </motion.div>
            </div>

            {/* Right Image with Stats Badge */}
            <div className="col-lg-6">
              <motion.div
                className="abt-section  position-relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ 
                  paddingLeft: '40px',
                  paddingTop: '40px'
                }}
              >
                {/* Yellow Background Shape */}
                <div className="abtsm-div"
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '40px',
                    width: '350px',
                    height: '350px',
                    backgroundColor: '#0d6efd',
                    borderRadius: '50px 50px 0 0',
                    zIndex: 0
                  }}
                />
                
                {/* Main Image */}
                <div 
                  className="abtsm-img position-relative"
                  style={{
                    zIndex: 2,
                    width: '400px',
                    height: '450px',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    border: '6px solid #fbbf24'
                  }}
                >
                  <img 
                    src={aboutus}
                    alt="Global Foods"
                    className="w-100 h-100 object-fit-cover"
                    style={{objectPosition:"20% 50%"}}
                  />
                </div>

                {/* Stats Badge - Bottom Right */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  className="position-absolute text-center"
                  style={{
                    bottom: '-20px',
                    right: '20px',
                    padding: '25px 35px',
                    backgroundColor: '#2d3436',
                    border: '4px solid #fbbf24',
                    borderRadius: '20px',
                    zIndex: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                >
                  <h3 style={{ 
                    fontSize: '3rem', 
                    fontWeight: '700', 
                    color: '#fbbf24',
                    margin: 0,
                    lineHeight: '1'
                  }}>
                    200+
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: '#ffffff', 
                    margin: 0,
                    marginTop: '8px',
                    fontWeight: '600'
                  }}>
                    Capable Engineers
                  </p>
                </motion.div>

                {/* Decorative Element */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: '-20px',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                    borderRadius: '20px',
                    zIndex: 1,
                    transform: 'rotate(45deg)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div 
          style={{
            position: 'absolute',
            top: '100px',
            right: '100px',
            width: '30px',
            height: '30px',
            backgroundColor: 'rgba(251, 191, 36, 0.3)',
            borderRadius: '50%'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '150px',
            left: '50px',
            width: '20px',
            height: '20px',
            backgroundColor: 'rgba(251, 191, 36, 0.2)',
            borderRadius: '50%'
          }}
        />
      </section>
    </div>
  );
};

export default AboutDetail;