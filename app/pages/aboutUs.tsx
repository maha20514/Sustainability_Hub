// components/AboutUs.tsx

import styles from "../styles/about.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutText}>
        <h1>About Us</h1>
        <p className={styles.description}>
          At Sustainability Hub, we are dedicated to promoting a sustainable future. 
          Our mission is to empower individuals and communities to adopt eco-friendly practices 
          that contribute to a greener, healthier planet. Through our platform, we share knowledge, 
          offer resources, and connect like-minded people to create lasting positive change.
        </p>
        <p className={styles.description}>
          We believe in innovation, responsibility, and collaboration. Our team is passionate 
          about finding solutions that help people reduce their environmental impact while living 
          fulfilling, sustainable lives. Join us on our journey toward a sustainable tomorrow.
        </p>
      </div>
     {/*  <div className={styles.aboutImage}>
        <img src="/" alt="Sustainability Image" />
      </div> */}
    </section>
  );
};

export default AboutUs;
