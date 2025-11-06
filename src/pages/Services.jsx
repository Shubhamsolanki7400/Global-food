import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Global Sourcing",
      description: "Partnering with trusted suppliers to ensure premium quality and authenticity.",
      icon: "🌿",
      image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=600&q=80",
      gradient: "linear-gradient(to bottom right, #ec4899, #9333ea)",
      color: "#ec4899"
    },
    {
      id: 2,
      title: "Export & Import Management",
      description: "Complete handling of documentation, logistics, and international compliance.",
      icon: "🚢",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
      gradient: "linear-gradient(to bottom right, #3b82f6, #4f46e5)",
      color: "#3b82f6"
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Rigorous testing and certification for every batch.",
      icon: "🧪",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
      gradient: "linear-gradient(to bottom right, #4ade80, #0d9488)",
      color: "#4ade80"
    },
    {
      id: 4,
      title: "Customised Supply Solutions",
      description: "Tailored sourcing to meet client-specific needs.",
      icon: "🤝",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
      gradient: "linear-gradient(to bottom right, #fbbf24, #f97316)",
      color: "#fbbf24"
    },
    {
      id: 5,
      title: "Timely Delivery",
      description: "Efficient operations ensure prompt and reliable shipments.",
      icon: "⏱️",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
      gradient: "linear-gradient(to bottom right, #a855f7, #ec4899)",
      color: "#a855f7"
    }
  ];

  return (
    <section className="services-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Banner Section */}
      <div
        className="services-banner"
        style={{
          backgroundImage: `url(${require('../../src/assets/images/Service.png')})`,
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Our Services</h1>
      </div>
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="mb-4 " 
            style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              color: '#212529',
              marginTop:'30px'
            }}
          >
          How it Works
          </h2>
          <p 
            className="mx-auto" 
            style={{ 
              fontSize: '1.15rem', 
              color: '#6c757d', 
              maxWidth: '900px',
              lineHeight: '1.8'
            }}
          >
            At Global Foods Product, we specialise in the import and export of essential oils, herbal extracts, 
            carrier oils, botanical ingredients, grains, and pulses. We are committed to quality and long-term 
            partnerships with clients around the world.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div key={service.id} className="col-12 col-sm-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 100, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ height: '100%' }}
              >
                <div className="card border-0 shadow-lg overflow-hidden h-100" style={{ borderRadius: '30px' }}>
                  {/* Image Section */}
                  <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
                    <motion.img 
                      src={service.image} 
                      alt={service.title}
                      className="w-100 h-100 object-fit-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100" 
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
                    ></div>
                  </div>
                  
                  {/* Gradient Overlay Content */}
                  <div className="position-relative" >
                    <div 
                      className="p-4 shadow-lg" 
                      style={{
                        background: service.gradient,
                      
                      }}
                    >
                      {/* Icon */}
                      
                        
                      
                      {/* Content */}
                      <h3 className="text-white fw-bold mb-2" style={{ fontSize: '22px' }}>
                        {service.title}
                      </h3>
                      <p className="text-white mb-4" style={{ fontSize: '14px', opacity: 0.9, lineHeight: '1.6' }}>
                        {service.description}
                      </p>
                      
                      {/* Bottom Section */}
                      <div
  className="d-flex align-items-center justify-content-between"
  style={{ display: "flex", justifyContent: "center" }}
>

                        
                        <Link to="/services" className="text-decoration-none">
                          <motion.button 
                            className="btn text-white fw-semibold"
                            whileHover={{ scale: 1.1, backgroundColor: 'white', color: service.color }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              border: '2px solid white',
                              borderRadius: '10px',
                              padding: '8px 20px',
                              fontSize: '14px',
                              backgroundColor: 'transparent',
                              transition: 'all 0.3s'
                            }}
                          >
                            Learn More
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 text-center" style={{ paddingTop: '30px' }}>
                    
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-5 pt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div 
            className="p-5 mx-auto"
            style={{
              maxWidth: '900px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
            }}
          >
            <h4 className="mb-3" style={{ fontSize: '2rem', fontWeight: '700', color: '#212529' }}>
              Ready to Partner With Us?
            </h4>
            <p className="mb-4" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
              We are committed to quality and long-term partnerships with clients around the world.
            </p>
            <Link to="/contact" className="text-decoration-none">
              <motion.button
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(to right, #9333ea, #ec4899)',
                  color: '#ffffff',
                  padding: '14px 40px',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  border: 'none',
                  boxShadow: '0 8px 20px rgba(147, 51, 234, 0.3)'
                }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;