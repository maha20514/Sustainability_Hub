import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Sustainability Hub. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href="/privacy" className={styles.link}>
            Privacy Policy
          </a>
          <a href="/terms" className={styles.link}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
