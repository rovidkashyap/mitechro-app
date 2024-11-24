import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import '../ContactSection/_contact.css';

const Contact = () => {
    return (
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Item: Call Us */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="contact-info">
                <h3>Call Us Anytime</h3>
                <p>+91 976-082-8296</p>
              </div>
            </div>
  
            {/* Contact Item: Send Email */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-info">
                <h3>Send E-Mail</h3>
                <p>contact@mitechro.in</p>
              </div>
            </div>
  
            {/* Contact Item: Opening Hours */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-clock-o"></i>
              </div>
              <div className="contact-info">
                <h3>Counselling Hours</h3>
                <p>Mon - Sat (09.30 - 07.30)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact