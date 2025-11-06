import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
    <div className="container">
        <div className="footer-cta pt-5 pb-5">
            <div className="row">
                {/* === Column 1: Address (Unchanged) === */}
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="cta-text">
                            <h4>Head Office - Indore</h4>
                            <span>18/1 Balaji Vihar, Sanwer Road, Industry Area, Indore M.P</span>
                            <h4>Corporate Office</h4>
                            <span>49/C Nagin Nagar Indore, M.P India</span>
                        </div>
                    </div>
                </div>

                {/* === Column 2: Quick Links (NEW POSITION) === */}
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-link"></i> {/* Changed icon to represent links */}
                        <div className="cta-text">
                            <h4>Quick Links</h4>
                            <div style={{ display: "flex", gap: "10px", flexFlow:"column" }}>
                                <p><Link to='/' style={{ textDecoration: "none", color: "#5294ea" }}>Home</Link></p>
                                <p><Link to='/about' style={{ textDecoration: "none", color: "#5294ea" }}>About</Link></p>
                                <p><Link to='/products' style={{ textDecoration: "none", color: "#5294ea" }}>Products</Link></p>
                                <p><Link to='/services' style={{ textDecoration: "none", color: "#5294ea" }}>Services</Link></p>
                                <p><Link to='/contact' style={{ textDecoration: "none", color: "#5294ea" }}>Contact</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === Column 3: Mail, Call, and WhatsApp (NEW POSITION) === */}
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="far fa-envelope-open"></i>
                        <div className="cta-text">
                            <h4>Mail us</h4>
                            <span>info@eaglesexports.com</span>
                            
                            {/* --- Phone/WhatsApp Added Below Email --- */}
                            <h4 style={{marginTop:"15px"}}>Call/WhatsApp</h4> 
                            <span>+91 9243986665</span>
                            {/* --- END Phone/WhatsApp --- */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2025, All Right Reserved Global Food.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  );
};

export default Footer;
