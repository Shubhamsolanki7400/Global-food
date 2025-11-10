import React, { useState, useEffect } from 'react';
import image1 from '../../src/assets/images/banner1.jpeg'
import image2 from '../../src/assets/images/banner2.jpeg'
import image3 from '../../src/assets/images/banner3.jpeg'
import image4 from '../../src/assets/images/banner4 (1).jpg'
import image5 from '../../src/assets/images/banner5.jpg'
const banners = [
  {
    image: image1, 
    head: "Let the nature heal you",
    title: "ORGANIC",
    subtitle: "Essential Oils",
    text: "Pure & Natural Aromatherapy for Your Wellness",
  },
  {
    image: image2,  // ← Use the imported variable
    head: "Wellness for your body",
    title: "PREMIUM",
    subtitle: "Health Ingredients",
    text: "Organic & Nutritious Supplements for Better Life",
  },
  {
    image: image3,  // ← Use the imported variable
    head: "Nourish your skin naturally",
    title: "PURE",
    subtitle: "Carrier Oils",
    text: "Cold-Pressed Oils for Natural Beauty Care",
  },
  {
    image: image4,  // ← Use the imported variable
    head: "Taste the authentic tradition",
    title: "NATURAL",
    subtitle: "Indian Spice",
    text: "Authentic Flavors from India",
  },
   {
  image: image5,
  head: "Experience True Indian Nutrition",
  title: "NATURAL",
  subtitle: "Pulses & Grains",
  text: "Nutritious-bringing purity and taste to every meal",
},
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
    
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
        setFadeState('fade-in');
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
   
    setTimeout(() => {
      setCurrentSlide(index);
     
    }, 3000);
  };

  const banner = banners[currentSlide];

  return (
    <div className="banner-slider" style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
      <div className="slide" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img 
          src={banner.image} 
          alt={`Banner ${currentSlide + 1}`} 
          style={{ 
            maxHeight: '600px', 
            width: '100%', 
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 0.8s ease-in-out',
            opacity: fadeState === 'fade-in' ? 1 : 0
          }} 
        />
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
      
          opacity: fadeState === 'fade-in' ? 1 : 0
        }} />
        
        <div 
          className="slide-text" 
          style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            padding: '0 80px',
            maxWidth: '800px',
            color: 'white',
            zIndex: 10,
            transition: 'all 0.7s ease-in-out',
            opacity: fadeState === 'fade-in' ? 1 : 0,
            marginLeft: fadeState === 'fade-in' ? '0' : '-30px'
          }}
        >
         
          
          <h1 style={{
            fontSize: '72px',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '20px'
          }}>
            <span style={{ 
              display: 'block', 
              color: '#0d6efd',
              marginBottom: '10px'
            }}>
              {banner.title}
            </span>
            <span style={{ display: 'block' }}>
              {banner.subtitle}
            </span>
          </h1>
          
          <p style={{
            fontSize: '20px',
            fontWeight: '300',
            color: '#ffff',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            {banner.text}
          </p>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 10
      }}>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '32px' : '12px',
              height: '12px',
              borderRadius: '6px',
              backgroundColor: currentSlide === index ? '#0d6efd' : '#0d6efd',
              border: 'none',
              cursor: 'pointer',
            
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}