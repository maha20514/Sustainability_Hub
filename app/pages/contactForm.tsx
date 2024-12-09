// components/ContactForm.tsx
"use client"
import React, { useState } from "react";
import styles from "../styles/contactForm.module.css";  // Ensure correct path

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement form submission logic here (e.g., API call)
  };

  return (
    <div className={styles.contactFormContainer}>  {/* Apply CSS class */}
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>  {/* Apply CSS class */}
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          rows={5}
          required
        />

        <button type="submit" className={styles.submitBtn}>  {/* Apply CSS class */}
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
