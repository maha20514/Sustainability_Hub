// pages/contact.tsx

import React from "react";
import styles from "@/app/styles/contact.module.css";  // Import the styles
import ContactForm from "@/app/pages/contactForm";

const Contact = () => {
  return (
    <div>
      <main className={styles.contactPage}>
        <section className={styles.contactIntro} >
          <h1 >Get in Touch</h1>
          <p>
            We would love to hear from you! Please reach out for any questions or
            inquiries, and we will get back to you as soon as possible.
          </p>
        </section>

        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
