import React from 'react';
import '../ServicesSection/_services.css';

const Services = () => {
    const servicesData = [
        {
          icon: "fa fa-desktop",
          title: "Software Development",
          description:
            "Tailored software solutions designed to meet your business needs and drive efficiency."
        },
        {
          icon: "fa fa-shopping-cart",
          title: "Website Designing",
          description:
            "Creative and responsive website designs to showcase your brand and engage users."
        },
        {
          icon: "fa-internet-explorer",
          title: "SEO Optimization",
          description:
            "Enhance your online visibility and search engine rankings with expert SEO strategies."
        },
        {
          icon: "fa-eercast",
          title: "Digital Marketing",
          description:
            "Comprehensive digital marketing services to expand your reach and grow your business."
        },
        {
          icon: "fa-handshake-o",
          title: "IT Consultant",
          description:
            "Expert IT consulting to align technology with your business objectives."
        },
        {
          icon: "fa fa-user-o",
          title: "E-Commerce Development",
          description:
            "Custom e-commerce platforms to empower your online business and boost sales."
        }
      ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Discover the range of services we offer to help your business thrive.</p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
                <div className="icon-container">
                    <i className={`fa ${service.icon}`} aria-hidden="true"></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services