import React, { useState } from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const boxData = [
    {
      id: 1,
      image: require('../assets/images/herbsimage.png'),
      title: 'Herbs In Crude , Powder & Extracts',
      description: 'Pure herbs in crude, powder, and concentrated extract forms.',
      icon: '🌿',
      gradient: 'linear-gradient(to bottom right, #ec4899, #9333ea)'
    },
    {
      id: 2,
      image: require('../assets/images/healthingradients.png'),
      title: 'Health Ingredients',
      description: 'Vital ingredients to boost health and wellness naturally.',
      icon: '💚',
      gradient: 'linear-gradient(to bottom right, #3b82f6, #4f46e5)'
    },
    {
      id: 3,
      image: require('../assets/images/oilproduct.png'),
      title: 'Herbal Essential Oils',
      description: 'Aromatic oils distilled from premium herbal sources.',
      icon: '💧',
      gradient: 'linear-gradient(to bottom right, #fbbf24, #f97316)'
    },
    {
      id: 4,
      image: require('../assets/images/botanicalextracts.jpeg'),
      title: 'Herbal Botanical Extracts',
      description: 'Potent plant-based extracts for natural healing.',
      icon: '⚗️',
      gradient: 'linear-gradient(to bottom right, #4ade80, #0d9488)'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % boxData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + boxData.length) % boxData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + boxData.length) % boxData.length;
      cards.push({ ...boxData[index], position: i, originalIndex: index });
    }
    return cards;
  };

  return (
    <>
      <style>{`
        /* Desktop - Default styles (1200px and above) */
        .product-d-section {
          padding: 3rem 0;
        }

        .section-title {
          font-size: 3rem;
          font-weight: bold;
              background: linear-gradient(135deg, rgb(236, 72, 153), rgb(147, 51, 234)) text;
    -webkit-text-fill-color: transparent;
        }

        .swiper-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .nav-button {
          width: 60px;
          height: 60px;
          z-index: 20;
          cursor: pointer;
          transition: all 0.3s;
        }

        .nav-button.left {
          left: -30px;
        }

        .nav-button.right {
          right: -30px;
        }

        .cards-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem 3rem;
        }

        .product-card {
          width: 400px;
        }

        .product-card.side {
          width: 350px;
          opacity: 0.5;
          transform: scale(0.9);
        }

        .product-card.center {
          width: 400px;
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }

        .card-image-section {
          height: 300px;
        }

        .gradient-overlay-content {
          margin-top: -100px;
          margin-left: 20px;
          margin-right: 20px;
        }

        .icon-box {
          width: 70px;
          height: 70px;
          font-size: 35px;
        }

        .card-title {
          font-size: 22px;
        }

        .card-description {
          font-size: 14px;
        }

        /* Large Tablets and Small Desktops (992px - 1199px) */
        @media (max-width: 1199px) {
          .swiper-container {
            max-width: 1000px;
          }

          .product-card {
            width: 350px;
          }

          .product-card.center {
            width: 350px;
          }

          .product-card.side {
            width: 300px;
          }

          .cards-wrapper {
            gap: 1rem;
            padding: 1rem 2rem;
          }

          .nav-button.left {
            left: -20px;
          }

          .nav-button.right {
            right: -20px;
          }
        }

        /* Tablets (768px - 991px) */
        @media (max-width: 991px) {
          .section-title {
            font-size: 2.5rem;
          }

          .swiper-container {
            max-width: 750px;
          }

          .product-card {
            width: 320px;
          }

          .product-card.center {
            width: 320px;
          }

          .product-card.side {
            width: 280px;
          }

          .cards-wrapper {
            gap: 0.8rem;
            padding: 1rem 1.5rem;
          }

          .nav-button {
            width: 50px;
            height: 50px;
          }

          .nav-button.left {
            left: -15px;
          }

          .nav-button.right {
            right: -15px;
          }

          .card-image-section {
            height: 250px;
          }

          .gradient-overlay-content {
            margin-top: -80px;
          }

          .icon-box {
            width: 60px;
            height: 60px;
            font-size: 30px;
          }

          .card-title {
            font-size: 20px;
          }
        }

        /* Small Tablets and Large Phones (576px - 767px) */
        @media (max-width: 767px) {
          .section-title {
            font-size: 2rem;
            padding: 0 1rem;
          }

          .swiper-container {
            max-width: 100%;
            padding: 0 1rem;
          }

          /* Show only center card on mobile */
          .product-card.side {
            display: none;
          }

          .product-card {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
          }

          .product-card.center {
            width: 100%;
            max-width: 400px;
          }

          .cards-wrapper {
            gap: 0;
            padding: 1rem 1rem;
          }

          .nav-button {
            width: 45px;
            height: 45px;
          }

          .nav-button.left {
            left: 5px;
          }

          .nav-button.right {
            right: 5px;
          }

          .nav-button span {
            font-size: 24px !important;
          }

          .card-image-section {
            height: 220px;
          }

          .gradient-overlay-content {
            margin-top: -70px;
            margin-left: 15px;
            margin-right: 15px;
          }

          .icon-box {
            width: 55px;
            height: 55px;
            font-size: 28px;
          }

          .card-title {
            font-size: 18px;
          }

          .card-description {
            font-size: 13px;
          }
        }

        /* Mobile Phones (320px - 575px) */
        @media (max-width: 575px) {
          .product-d-section {
            padding: 2rem 0;
          }

          .section-title {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
          }

          .swiper-container {
            padding: 0 0.5rem;
          }

          .product-card {
            max-width: 350px;
          }

          .product-card.center {
            max-width: 350px;
          }

          .cards-wrapper {
            padding: 1rem 0.5rem;
          }

          .nav-button {
            width: 40px;
            height: 40px;
          }

          .nav-button.left {
            left: 0;
          }

          .nav-button.right {
            right: 0;
          }

          .nav-button span {
            font-size: 20px !important;
          }

          .card-image-section {
            height: 200px;
          }

          .gradient-overlay-content {
            margin-top: -60px;
            margin-left: 12px;
            margin-right: 12px;
          }

          .gradient-content-inner {
            padding: 1rem !important;
          }

          .icon-box {
            width: 50px;
            height: 50px;
            font-size: 25px;
          }

          .card-title {
            font-size: 16px;
            margin-bottom: 0.5rem !important;
          }

          .card-description {
            font-size: 12px;
            margin-bottom: 1rem !important;
          }

          .bottom-section {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start !important;
          }

          .know-more-btn {
            padding: 5px 16px !important;
            font-size: 13px !important;
          }

          .dots-indicator {
            margin-top: 1.5rem !important;
          }

          .dot {
            width: 10px !important;
            height: 10px !important;
          }

          .dot.active {
            width: 40px !important;
          }
        }

        /* Extra Small Devices (below 400px) */
        @media (max-width: 399px) {
          .section-title {
            font-size: 1.5rem;
          }

          .product-card {
            max-width: 300px;
          }

          .product-card.center {
            max-width: 300px;
          }

          .card-image-section {
            height: 180px;
          }

          .gradient-overlay-content {
            margin-top: -50px;
            margin-left: 10px;
            margin-right: 10px;
          }

          .icon-box {
            width: 45px;
            height: 45px;
            font-size: 22px;
          }

          .card-title {
            font-size: 15px;
          }

          .card-description {
            font-size: 11px;
          }
        }
      `}</style>

      <section className="product-d-section py-5">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2
              className="section-title mb-3"
              style={{
                display: 'inline-block',
                position: 'relative',
                paddingBottom: '10px',
              }}
            >
              Our Products
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

          {/* Swiper Container */}
          <div className="swiper-container">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="nav-button left position-absolute start-0 top-50 translate-middle-y bg-white rounded-circle border-0 shadow-lg d-flex align-items-center justify-content-center"
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
            >
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#9333ea' }}>←</span>
            </button>
            
            <button 
              onClick={nextSlide}
              className="nav-button right position-absolute end-0 top-50 translate-middle-y bg-white rounded-circle border-0 shadow-lg d-flex align-items-center justify-content-center"
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
            >
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#9333ea' }}>→</span>
            </button>

            {/* Cards Display */}
            <div className="cards-wrapper">
              {getVisibleCards().map((product) => {
                const isCenter = product.position === 0;
                
                return (
                  <motion.div 
                    key={product.originalIndex}
                    className={`product-card ${isCenter ? 'center' : 'side'}`}
                    onClick={() => !isCenter && goToSlide(product.originalIndex)}
                    style={{
                      transition: 'all 0.5s ease',
                      cursor: !isCenter ? 'pointer' : 'default'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: isCenter ? 1 : 0.5, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={isCenter ? { scale: 1.05 } : {}}
                  >
                    <div className="card border-0 shadow-lg overflow-hidden h-100" style={{ borderRadius: '30px' }}>
                      {/* Image Section */}
                      <div className="card-image-section position-relative overflow-hidden">
                        <motion.img 
                          src={product.image} 
                          alt={product.title}
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
                      <div className="gradient-overlay-content position-relative">
                        <div 
                          className="gradient-content-inner p-4 shadow-lg" 
                          style={{
                            background: product.gradient,
                            borderRadius: '20px'
                          }}
                        >
                          {/* Icon */}
                          <div 
                            className="icon-box d-flex align-items-center justify-content-center mb-3 shadow"
                            style={{
                              backgroundColor: '#1f2937',
                              borderRadius: '18px',
                            }}
                          >
                            {product.icon}
                          </div>
                          
                          {/* Content */}
                          <h3 className="card-title text-white fw-bold mb-2">
                            {product.title}
                          </h3>
                          <p className="card-description text-white mb-4" style={{ opacity: 0.9 }}>
                            {product.description}
                          </p>
                          
                          {/* Bottom Section */}
                          <div className="bottom-section d-flex align-items-center justify-content-between">
                            <Link to="/products" className="text-decoration-none">
                              <motion.button 
                                className="know-more-btn btn text-white fw-semibold"
                                whileHover={{ scale: 1.1, backgroundColor: 'transparent', color: '#9333ea' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                  border: '2px solid white',
                                  borderRadius: '10px',
                                  padding: '6px 20px',
                                  fontSize: '14px',
                                  backgroundColor: 'transparent',
                                  transition: 'all 0.3s'
                                }}
                              >
                                Know More
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 text-center" style={{ paddingTop: '30px' }}>
                        <p className="text-muted mb-0" style={{ fontSize: '13px' }}>
                          Premium quality herbal product
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dots Indicator */}
            <div className="dots-indicator d-flex justify-content-center gap-2 mt-4">
              {boxData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot border-0 rounded-pill ${currentIndex === index ? 'active' : ''}`}
                  style={{
                    width: currentIndex === index ? '50px' : '12px',
                    height: '12px',
                    backgroundColor: currentIndex === index ? '#9333ea' : '#d1d5db',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;