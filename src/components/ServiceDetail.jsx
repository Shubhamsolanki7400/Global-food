import React, { useState } from "react";
import { Globe, Truck, ArrowLeftRight } from "lucide-react";
import globalSourcing from '../assets/images/GlobalSourcing.jpg' 
import importExport from '../assets/images/exportimportservice.jpeg'
import quality from '../assets/images/qualityassurance.jpg'
const ServiceDetail = () => {
  const [activeService, setActiveService] = useState("oneForAll");

  const servicesData = {
    oneForAll: {
      title: " Global Sourcing",
      text: "Partnering with trusted suppliers to ensure premium quality and authenticity.",
      icon: <Globe />,
      gradient: 'linear-gradient(135deg, #ec4899, #9333ea)', // Pink to Purple
      image:  globalSourcing, // Herbal/spices image
    },
    import: {
      title: " Export & Import Management",
      text: "Complete handling of documentation, logistics, and international compliance.",
      icon: <Truck />,
      gradient: 'linear-gradient(135deg, #fbb333, #f97323)', // Green to Teal
      image:  importExport // Shipping/logistics
    },
    export: {
      title: "Quality Assurance",
      text: "Rigorous testing and certification for every batch",
      icon: <ArrowLeftRight />,
      gradient: 'linear-gradient(135deg, #ec4899, #9333ea)', // Yellow to Orange
      image: quality // Global trade
    },
  };



  const decorativeDotStyle = (top, left, gradient, size = '12px') => ({
    position: 'absolute',
    width: size,
    height: size,
    borderRadius: '50%',
    background: gradient,
    top,
    left,
    opacity: 0.7,
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
  });

  const titleStyle = {
    color: '#ffffff',
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '3rem',
    letterSpacing: '-0.5px',
  };

  const serviceCardStyle = (isActive, gradient) => ({
    display: 'flex',
    gap: '1.5rem',
    padding: '2rem',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
    border: isActive ? `2px solid transparent` : '2px solid transparent',
    backgroundImage: isActive ? `${gradient}` : 'none',
    backgroundClip: isActive ? 'padding-box' : 'padding-box',
    position: 'relative',
    transform: isActive ? 'translateX(8px)' : 'translateX(0)',
    boxShadow: isActive ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
  });

  const iconBoxStyle = (gradient) => ({
    width: '85px',
    height: '85px',
    minWidth: '85px',
    borderRadius: '18px',
    background: gradient,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: '#ffffff',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  });


  const mediaBoxStyle = (gradient, image) => ({
    backgroundColor: '#4a5568',
    borderRadius: '24px',
    height: '550px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `${gradient}, url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
  });

  const badgeStyle = (gradient) => ({
  
    
    right: '20px',
    background: gradient,
    padding: '15px 26px',
    borderRadius: '12px',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '0.9rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    width:'23%'

    
  });

  return (
    <>
      <style>{`
        /* Desktop - Default styles (1200px and above) */
        .service-container {
          background-color: #f5f5dc;
          min-height: 100vh;
          padding: 4rem 2rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .service-main-card {
          max-width: 1400px;
          margin: 0 auto;
          background-color: #0d6efd;
          border-radius: 32px;
          padding: 3.5rem;
          border: 2px solid #ffffff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .service-title {
          color: #ffffff;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 3rem;
          letter-spacing: -0.5px;
        }

        .service-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .service-card-item {
          display: flex;
          gap: 1.5rem;
          padding: 2rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .service-icon-box {
          width: 85px;
          height: 85px;
          min-width: 85px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .service-content {
          flex: 1;
        }

        .service-item-title {
          color: #ffffff;
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .service-item-text {
          color: #cbd5e0;
          font-size: 1rem;
          line-height: 1.7;
        }

        .service-media-box {
          background-color: #4a5568;
          border-radius: 24px;
          height: 550px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-blend-mode: overlay;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .service-media-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.5rem;
        }

        .service-media-title {
          color: #ffffff;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .service-media-subtitle {
          color: #ffffff;
          font-size: 1.1rem;
          opacity: 0.9;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .service-badge {
         display:flex;
         justify-content:center
     top:447px !important;
          right: 20px;
          padding: 10px 20px;
          border-radius: 12px;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        /* Large Tablets and Small Desktops (992px - 1199px) */
        @media (max-width: 1199px) {
          .service-main-card {
            max-width: 1100px;
            padding: 3rem;
          }

          .service-content-wrapper {
            gap: 2.5rem;
          }

          .service-icon-box {
            width: 75px;
            height: 75px;
            min-width: 75px;
            font-size: 1.8rem;
          }

          .service-item-title {
            font-size: 1.5rem;
          }

          .service-item-text {
            font-size: 0.95rem;
          }

          .service-media-box {
            height: 500px;
          }
        }

        /* Tablets (768px - 991px) */
        @media (max-width: 991px) {
          .service-container {
            padding: 3rem 1.5rem;
          }

          .service-badge {
              right: 0px; 
    background: linear-gradient(135deg, rgb(251, 191, 36), rgb(249, 115, 22));
    padding: 0px; 
    border-radius: 12px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
    width: 47%;
    cursor: pointer;
    display: flex
;
    justify-content: center;

}

      
          .service-main-card {
            padding: 2.5rem;
          }

          .service-title {
            font-size: 2.5rem;
            margin-bottom: 2.5rem;
          }

          .service-content-wrapper {
            gap: 2rem;
          }

          .service-card-item {
            padding: 1.5rem;
            gap: 1.2rem;
          }

          .service-icon-box {
            width: 70px;
            height: 70px;
            min-width: 70px;
            font-size: 1.6rem;
          }

          .service-item-title {
            font-size: 1.4rem;
          }

          .service-item-text {
            font-size: 0.9rem;
          }

          .service-media-box {
            height: 450px;
          }

          .service-media-title {
            font-size: 1.6rem;
          }

          .service-media-subtitle {
            font-size: 1rem;
          }
        }

        /* Small Tablets and Large Phones (576px - 767px) */
        @media (max-width: 767px) {
          .service-container {
            padding: 2rem 1rem;
          }

          .service-main-card {
            padding: 2rem;
            border-radius: 24px;
          }

          .service-title {
            font-size: 2rem;
            margin-bottom: 2rem;
            text-align: center;
          }

          .service-content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .service-card-item {
            padding: 1.2rem;
          }

          .service-icon-box {
            width: 60px;
            height: 60px;
            min-width: 60px;
            font-size: 1.4rem;
          }

          .service-item-title {
            font-size: 1.2rem;
          }

          .service-item-text {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .service-media-box {
            height: 400px;
          }

          .service-media-overlay {
            padding: 2rem;
          }

          .service-media-title {
            font-size: 1.4rem;
          }

          .service-media-subtitle {
            font-size: 0.95rem;
          }

          .service-badge {
           
            right: 15px;
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }

        /* Mobile Phones (320px - 575px) */
        @media (max-width: 575px) {
          .service-container {
            padding: 1.5rem 0.75rem;
          }

          .service-main-card {
            padding: 1.5rem;
            border-radius: 20px;
          }

          .service-title {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
          }

          .service-content-wrapper {
            gap: 1.5rem;
          }

          .service-card-item {
            padding: 1rem;
            gap: 1rem;
            border-radius: 16px;
          }

          .service-icon-box {
            width: 55px;
            height: 55px;
            min-width: 55px;
            font-size: 1.2rem;
            border-radius: 14px;
          }

          .service-item-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          .service-item-text {
            font-size: 0.8rem;
            line-height: 1.5;
          }

          .service-media-box {
            height: 350px;
            border-radius: 20px;
          }

          .service-media-overlay {
            padding: 1.5rem;
          }

          .service-media-title {
            font-size: 1.2rem;
            margin-bottom: 0.4rem;
          }

          .service-media-subtitle {
            font-size: 0.85rem;
          }

          .service-badge {
           
            right: 12px;
            padding: 6px 12px;
            font-size: 0.75rem;
            border-radius: 10px;
          }

          /* Hide decorative dots on mobile */
          .decorative-dot {
            display: none;
          }
        }

        /* Extra Small Devices (below 400px) */
        @media (max-width: 399px) {
          .service-main-card {
            padding: 1.2rem;
          }

          .service-title {
            font-size: 1.5rem;
          }

          .service-card-item {
            padding: 0.9rem;
            gap: 0.8rem;
          }

          .service-icon-box {
            width: 50px;
            height: 50px;
            min-width: 50px;
            font-size: 1.1rem;
          }

          .service-item-title {
            font-size: 1rem;
          }

          .service-item-text {
            font-size: 0.75rem;
          }

          .service-media-box {
            height: 300px;
          }

          .service-media-overlay {
            padding: 1.2rem;
          }

          .service-media-title {
            font-size: 1.1rem;
          }

          .service-media-subtitle {
            font-size: 0.8rem;
          }
        }
          .service-media-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2.5rem;
}

.service-badge {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 28px;
  border-radius: 25px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.service-badge:hover {
  transform: translateX(-50%) scale(1.05);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

      `}</style>

    <div className="service-container">
        <div style={{ textAlign: 'center' }}>
            <h2
              className="section-title mb-3 pt-5"
              style={{
                display: 'inline-block',
                position: 'relative',
                paddingBottom: '10px',
              }}
            >
              Services
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
      <div className="service-main-card">
        {/* Decorative colorful dots */}
        <div className="decorative-dot" style={decorativeDotStyle('8%', '95%', 'linear-gradient(135deg, #ec4899, #9333ea)', '18px')}></div>
        <div className="decorative-dot" style={decorativeDotStyle('25%', '4%', 'linear-gradient(135deg, #4ade80, #0d9488)', '14px')}></div>
        <div className="decorative-dot" style={decorativeDotStyle('55%', '97%', 'linear-gradient(135deg, #fbbf24, #f97316)', '16px')}></div>
        <div className="decorative-dot" style={decorativeDotStyle('80%', '2%', 'linear-gradient(135deg, #3b82f6, #4f46e5)', '12px')}></div>
        <div className="decorative-dot" style={decorativeDotStyle('15%', '50%', 'linear-gradient(135deg, #ec4899, #9333ea)', '10px')}></div>

        <h2 className="service-title">How it Works:</h2>

        <div className="service-content-wrapper">
          {/* Left side - Services */}
          <div className="services-list">
            {Object.keys(servicesData).map((key) => {
              const service = servicesData[key];
              const isActive = activeService === key;
              
              return (
                <div
                  key={key}
                  className="service-card-item"
                  style={serviceCardStyle(isActive, service.gradient)}
                  onClick={() => setActiveService(key)}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div className="service-icon-box" style={iconBoxStyle(service.gradient)}>
                    {service.icon}
                  </div>
                  <div className="service-content">
                    <h3 className="service-item-title">{service.title}</h3>
                    <p className="service-item-text">{service.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - Image Display */}
          <div className="service-media-box" style={mediaBoxStyle(
            servicesData[activeService].gradient,
            servicesData[activeService].image
          )}>
           <div className="service-media-overlay">
            
             <a 
  href={servicesData[activeService].link || '/services'} 
  style={{ textDecoration: 'none' }}
>
  <div 
    className="service-badge" 
    style={{
      ...badgeStyle(servicesData[activeService].gradient),
      cursor: 'pointer',
      
    }}
   
  >
    Read More
  </div>
</a>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceDetail;