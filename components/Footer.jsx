import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Hysio.nl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
