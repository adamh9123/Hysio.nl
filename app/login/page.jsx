"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../auth/AuthForm.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Vul alsjeblieft beide velden in.');
      return;
    }

    // Simulate login failure for demonstration
    setError('Ongeldig e-mailadres of wachtwoord.');
    console.log({ email, password });
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formContainer}>
        <h1>Inloggen</h1>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mailadres</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="naam@voorbeeld.nl"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Wachtwoord</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Wachtwoord"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Inloggen
          </button>
        </form>
        <div className={styles.links}>
          <Link href="/password-reset">Wachtwoord vergeten?</Link>
          <Link href="/register">Nog geen account? Registreer nu.</Link>
        </div>
      </div>
    </div>
  );
}
