import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/About.css'
const AboutDetail = () => {
  const [isPlaying, setIsPlaying] = useState(false);
 
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
   <div className="tmb">
     <div className="container tmb-second-container">
      <div className="row">
        <div className="section-container">
          {/* First Text Block (Top Left) */}
          <div className="text-box top-box border-round">
            <div className="heading-box mb-1 mb-md-3 mb-lg-4">
              <h3 className="heading-lg text-start mb-1 mb-md-3 mb-lg-3">
                Build the Future with Silimind
              </h3>
              <p className="heading-text">
                Join a team of engineers, dreamers, and innovators building
                world-changing AI. Whether you're crafting intelligent
                automation, designing secure AI systems, or pioneering human-AI
                interaction—Silimind is where your skills shape the future.
                We're not just hiring; we're assembling a force to redefine
                what's possible.
              </p>
            </div>
          </div>

          {/* Center Image (Middle) */}
          <div className="image-box">
            <img
              src="https://silimind.com/wp-content/uploads/2025/04/robot-thumb.png"
              alt="Robot Image"
            />
          </div>

          {/* Third Text Block (Bottom Right) */}
          <div className="text-box bottom-box border-round">
            <div className="heading-box mb-1 mb-md-3 mb-lg-4">
              <h3 className="heading-lg text-start mb-1 mb-md-3 mb-lg-3">
                Why Join Silimind?
              </h3>
              <p>
                Because here, your work won’t get buried — it will build the
                systems shaping tomorrow. At Silimind, you’ll:
              </p>
              <ul>
                <li>
                  Work on real AI solutions used in security, automation, and
                  education.
                </li>
                <li>
                  Collaborate with elite engineers and innovators across the
                  globe.
                </li>
                <li>
                  See your code make a difference, not just sit in a repository.
                </li>
                <li>
                  Be part of a fast-moving, purpose-driven team that builds
                  tools that free people from repetitive tasks.
                </li>
                <li>
                  Help create a world where AI works with humans, not against
                  them.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
 
  );
};

export default AboutDetail;
