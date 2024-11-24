import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './_footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div>
      <footer id="contact" className="footer">
        {/* Section: Social media */}
        <section className="social-media-section">
          <div className="social-media-wrapper">
            {/* Left */}
          <div className="social-media-left">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div className="social-media-right">
            <a href="https://www.facebook.com/mitechrosolutions/" className="social-icon">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.x.com/ask_mitechro/" className="social-icon">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/mitechro.solutions/" className="social-icon">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/mitechro/" className="social-icon">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          </div>
        </section>
        {/* Section: Links */}
        <section className="links-section">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Company Info Column */}
              <div className="text col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">MITechRo</h6>
                <hr className="divider" />
                <p>
                At MITechRo, we are specializing in Custom Software development, Website Designing, 
                Website Hosting, Digital Marketing and a wide range of other IT services.
                </p>
              </div>

              {/* Products Column */}
              <div className="text col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company</h6>
                <hr className="divider" />
                <p>
                  <a href="#!" className="text-white">
                    <i className="fa fa-arrow-circle-o-right"></i>&nbsp;
                    About Us
                    </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    <i className="fa fa-arrow-circle-o-right"></i>&nbsp;
                    Our Team
                    </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                  <i className="fa fa-arrow-circle-o-right"></i>&nbsp;
                    Pricing Plan
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                  <i className="fa fa-arrow-circle-o-right"></i>&nbsp;
                    Latest Blog
                    </a>
                </p>
              </div>

              {/* Useful Links Column */}
              <div className="text col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Our Services</h6>
                <hr className="divider" />
                <p>
                  <a href="#!" className="text-white">
                  <i className="fa fa-arrow-circle-o-right"></i>&nbsp;
                    IT Solutions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                  <i className="fa fa-arrow-circle-o-right"></i>&nbsp;
                    Cyber Security
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                  <i className="fa fa-arrow-circle-o-right"></i>&nbsp;
                    Digital Marketing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                  <i className="fa fa-arrow-circle-o-right"></i>&nbsp;
                    SEO Marketing
                  </a>
                </p>
              </div>

              {/* Contact Column */}
              <div className="text col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="divider" />
                <p><i className="fa fa-home mr-3"></i> Agra, Uttar Pradesh (Full Remote Support)</p>
                <p><i className="fa fa-envelope mr-3"></i> contact@mitechro.in</p>
                <p><i className="fa fa-phone mr-3"></i> +91-976-082-8296</p>
              </div>
            </div>
          </div>
        </section>
        {/* Copyright Section */}
        <div className="text-center p-3 copyright">
          © {currentYear} MITechRo Solutions. All Right Reserved
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer;