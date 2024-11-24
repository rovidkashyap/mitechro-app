import React, { useState } from 'react';
import '../FaqSection/_faq.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        {
            question: "What services do you provide?",
            answer: "We offer a wide range of IT services including web development, app development, cloud solutions, and IT consulting."
        },
        {
            question: "Do you provide 24/7 customer support?",
            answer: "Yes, we offer 24/7 support to ensure our clients get assistance whenever they need it."
          },
          {
            question: "How can I request a custom service?",
            answer: "You can request a custom service by contacting us through our website or by sending us an email with your specific requirements."
          },
          {
            question: "What are your pricing models?",
            answer: "We provide flexible pricing models including hourly rates, fixed prices for projects, and dedicated team engagements."
          },
          {
            question: "How do you ensure project deadlines are met?",
            answer: "We follow an agile development approach and maintain transparent communication to ensure all project deadlines are met."
          }
    ];

  return (
    <section id="faq" className="faq">
        <div className="container">
            <div className="section-title-faq">
                <h2>Frequently Asked Questions</h2>
            </div>
            <ul className="faq-list">
                {faqData.map((faq, index) => (
                    <li key={index} className={activeIndex === index ? "active" : ""}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="faq-icon">
                                {activeIndex === index ? "-" : "+"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default FAQ