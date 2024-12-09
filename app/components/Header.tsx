import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Sustainability Hub</h1>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/challenges" className={styles.link}>
            Challenges
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>
        <div className={styles.authButtons}>
          <SignedOut>
            <div className={styles.buttons}>
              <Link href="/sign-in">
                <Button className={styles.button}>
                  Log In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className={styles.button}>
                  <span className="primary-text-gradient">Sign up</span>
                </Button>
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <div className={styles.signedIn}>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
