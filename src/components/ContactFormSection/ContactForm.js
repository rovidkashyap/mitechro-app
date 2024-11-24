import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './_contactForm.css';

const ContactForm = ({ closeContactForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Full Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email Address is invalid";
    }
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.query.trim()) errors.query = "Query is required";
    if (!formData.comment.trim()) errors.comment = "Comment is required";

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: document.getElementById('name').value,
      email: document.getElementById('email').value,
      mobile: document.getElementById('mobile').value,
      query: document.getElementById('query').value,
      comment: document.getElementById('comment').value,
    };

    // Basic validation
    if (Object.values(formData).some((field) => !field.trim())) {
      alert('All fields are required!');
      return;
    }

    try{
      const response = await fetch('http://192.168.1.4:3000/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your details have been saved successfully!');
        // Reset form
        document.getElementById('contactForm').reset();
      } else {
        alert('Failed to save your details. Please try again.');
      }
    } catch (error){
      console.error('Error submitting form: ', error);
      alert('Error submitting your details. Please try again later.');
    }
  };

  return (
    <div>
            <div className="form-overlay">
                <div className="form-popup">
                    <button className="close-btn" onClick={closeContactForm}>
                        &times;
                    </button>
                    <h2>Contact Us</h2>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile" />
              </div>
              <div className="form-group">
                <label htmlFor="query">Query</label>
                <input type="text" id="query" name="query" placeholder="Enter your query" />
              </div>
              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Enter additional comments"
                ></textarea>
                {errors.comment && <p className="error">{errors.comment}</p>}
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
                </div>
            </div> 
    </div>
  )
}

export default ContactForm