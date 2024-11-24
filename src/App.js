import React, { useState } from "react";
import './App.css';
import TopHeader from './components/TopHeaderSection/TopHeader';
import Navbar from './components/NavigationSection/Navigation';
import ContactForm from './components/ContactFormSection/ContactForm';
import Banner from './components/BannerSection/Banner';
import AboutUs from './components/AboutSection/AboutUs';
import Services from './components/ServicesSection/Services';
import Contact from './components/ContactSection/Contact';
import Pricing from './components/PricingSection/Pricing';
import Faq from './components/FaqSection/FAQ';
import Footer from './components/FooterSection/Footer';

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <div className="App">
      <TopHeader />
      {/* Pass the open handler to the Navigation component */}
      <Navbar openContactForm={openContactForm} />

      {/* Popup Form */}
      {isContactFormOpen && <ContactForm closeContactForm={closeContactForm} />}

      <Banner />
      <AboutUs />
      <Services />
      <Contact />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
