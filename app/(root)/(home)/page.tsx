
import styles from "@/app/styles/home.module.css";  // We'll add styling here
import React from 'react';


const Page = () => {
  return (
    <>

 {/* Hero Section */}
 <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Our Sustainable Future</h1>
          <p className={styles.subtitle}>Empowering positive change with every step you take</p>
          <div className={styles.buttons}>
            <a href="#features" className={styles.ctaButton}>Explore Features</a>
            <a href="#contact" className={styles.ctaButtonSecondary}>Contact Us</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Key Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Feature 1</h3>
              <p>Discover how our tools empower users to create impactful projects.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Feature 2</h3>
              <p>Collaborate seamlessly with others to push the boundaries of sustainability.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Feature 3</h3>
              <p>Track your progress with data-driven insights to make better decisions.</p>
            </div>
          </div>
        </div>
      </section>
      
     


    </>
  );
};

export default Page;
