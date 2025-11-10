import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { FaLeaf, FaHandshake, FaShippingFast, FaStar } from "react-icons/fa";

import { useInView } from 'react-intersection-observer';
import image1 from '../assets/images/banner1.jpg';
import image2 from '../assets/images/banner2.jpg';
import image3 from '../assets/images/banner3.jpg';
import image4 from '../assets/images/banner4.jpg';


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
      { id: 2, count: 17, suffix: "", title1: "Years of", title2: "Expertise" },
    ],
  };

  const reasons = [
    {
      icon: <FaLeaf className="icon green" />,
      title: "100% Natural Products",
      desc: "We source only the finest quality herbs, spices, and ingredients, ensuring purity and authenticity in every product.",
    },
    {
      icon: <FaHandshake className="icon blue" />,
      title: "Trusted Partnerships",
      desc: "We believe in long-term collaborations built on trust, transparency, and mutual growth.",
    },
    {
      icon: <FaShippingFast className="icon orange" />,
      title: "Global Delivery",
      desc: "Efficient logistics network for timely and safe delivery across international markets.",
    },
    {
      icon: <FaStar className="icon yellow" />,
      title: "Quality Assurance",
      desc: "Every batch undergoes strict quality checks to meet international standards and customer satisfaction.",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".why-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
     <div
        className="services-banner"
        style={{
          backgroundImage: `url(${require('../../src/assets/images/aboutusbannermain.jpg')})`,
        }}
      >
        <div className="banner-overlay"></div>
        <h1 className="banner-title">About us</h1>
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
       <section className="why-section py-5" id="why-choose-us">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          Why <span>Choose Us</span>
        </h2>
        <div className="row mt-5">
          {reasons.map((reason, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
              <div className="why-card text-center p-4 h-100">
                {reason.icon}
                <h4 className="why-title mt-3">{reason.title}</h4>
                <p className="why-desc">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
