"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './HeaderNavbar.module.css';

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pro', label: 'Hysio Pro' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            Hysio<span>.nl</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.href} className={styles.navLink}>
              <Link href={link.href} className={pathname === link.href ? styles.active : ''}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
          <Link href="/register" legacyBehavior>
            <a className={styles.registerButton}>Register</a>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
          <div />
          <div />
          <div />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href} className={styles.navLink}>
             <Link href={link.href} className={pathname === link.href ? styles.active : ''} onClick={toggleMenu}>
                {link.label}
             </Link>
          </li>
        ))}
        <Link href="/login" className={styles.loginLink} onClick={toggleMenu}>
          Login
        </Link>
        <Link href="/register" legacyBehavior>
            <a className={styles.registerButton} onClick={toggleMenu}>Register</a>
        </Link>
      </div>
    </header>
  );
};

export default HeaderNavbar;
