import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import image1 from '../assets/images/banner1.png';
import image2 from '../assets/images/banner2.png';
import image3 from '../assets/images/banner3.png';
import image4 from '../assets/images/banner4.png';


const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const aboutData = {
    heading: "About Us",
    subHeading: "Feel Nature Feel Wellness",
    description1:
      "We export our premium products to key markets worldwide, including the USA, Europe, and Latin America, establishing a global footprint of trust and reliability.",
    description2:
      "Our ultimate goal is to ensure profitability and add value to our customers' businesses by building long-term relationships through exceptional product quality, outstanding customer service, and reliable, on-time delivery.",
    
    images: [
      { id: 1, src: image1 },
      { id: 2, src: image2 },
      { id: 3, src: image3 },
      { id: 4, src: image4 },
    ],

    counters: [
      { id: 1, count: 100, suffix: "+", title1: "Types of", title2: "Essential Oils" },
      { id: 2, count: 15, suffix: "", title1: "Years of", title2: "Expertise" },
    ],
  };

 

  return (
    <>
      <div className="about-banner position-relative text-center d-flex align-items-center justify-content-center" style={{ height: '600px', backgroundImage: `url(${require('../assets/images/Aboutus.jpg')})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <h1 className="position-relative text-white display-3 fw-bold">About Banner</h1>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Images */}
            <div className="col-lg-6">
              <div className="row g-3">
                {aboutData.images?.map((item, index) => (
                  <div key={item.id} className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      src={item.src}
                      alt={`about-${item.id}`}
                      style={{
                        visibility: 'visible',
                        animationDelay: `${0.2 * index}s`,
                        animationName: 'zoomIn',
                        marginTop: index === 1 ? '25%' : 0,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6">
              <h5 className="section-title text-start fw-normal">{aboutData.heading}</h5>
              <h1 className="mb-4" style={{ color: 'black' }}>
                {aboutData.subHeading.split(' ')[0]}{' '}
                <i className="fa-solid fa-bottle-droplet me-2" style={{ color: '#b46c00' }}></i>
                {aboutData.subHeading.split(' ')[1]}
              </h1>
              <p className="mb-4" style={{ color: '#666565' }}>{aboutData.description1}</p>
              <p className="mb-4" style={{ color: '#666565' }}>{aboutData.description2}</p>

              {/* Counters */}
              <div className="row g-4 mb-4">
                {aboutData.counters.map((item) => (
                  <div className="col-sm-6" key={item.id}>
                    <div className="d-flex align-items-center px-3" style={{ borderLeft: "5px solid #b46c00" }} ref={ref}>
                      <h1 className="flex-shrink-0 display-5 mb-0" style={{ color: "#b46c00" }}>
                        {inView && <CountUp end={item.count} duration={3} suffix={item.suffix} />}
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0" style={{ color: "#666565" }}>{item.title1}</p>
                        <h6 className="text-uppercase mb-0" style={{ color: "black" }}>{item.title2}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a className="btn py-3 px-5 mt-2" href="/" style={{background:"#b46c00", color:"white"}}>Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
