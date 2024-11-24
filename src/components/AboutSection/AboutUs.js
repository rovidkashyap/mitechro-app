import React from 'react'
import './_aboutus.css';
import about from '../../assets/img/aboutus/about.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="aboutus-section">
      <div className="aboutus-container">
        {/* Image Section */}
        <div className="aboutus-image-wrapper">
          <img src={about} alt="About Us" className="aboutus-image" />
        </div>

        {/* Content Section */}
        <div className="aboutus-content">
          <h2 className="aboutus-heading">IT Support for Business</h2>
          <h1 className="aboutus-subheading">
            Ensuring Your Success Trusted IT Services Source
          </h1>
          <p className="aboutus-description">
            Monotonetically synergize granular markets and front markets.
            Collaboratively visualize strategic infomediaries after
            multimedia-based models. Synergistically task state-of-the-art
            infrastructures for your business.
          </p>
          <hr />
          <div className="aboutus-features">
            <div className="feature-item">
              <div className="feature-icon-container">
                <span className="feature-icon">💸</span>
              </div>
              
              <div className="feature-text">100% Money Back Guarantee</div>
            </div>
            <div className="feature-item">
            <div className="feature-icon-container">
              <span className="feature-icon">💻</span>
              </div>
              <div className="feature-text">24/7 Free Technical Support</div>
            </div>
            <div className="feature-item">
            <div className="feature-icon-container">
              <span className="feature-icon">🧑‍💻</span>
              </div>
              <div className="feature-text">Expert & Dedicated Team Members</div>
            </div>
            <div className="feature-item">
            <div className="feature-icon-container">
              <span className="feature-icon">👍</span>
              </div>
              <div className="feature-text">100% Customer Satisfaction</div>
            </div>
          </div>
          <button className="discover-btn">Discover More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs