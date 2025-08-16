"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../auth/AuthForm.module.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validation
    if (!formData.naam || !formData.email || !formData.password) {
      setError('Vul alsjeblieft alle velden in.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Wachtwoorden komen niet overeen.');
      return;
    }
    if (!agreed) {
        setError('Je moet akkoord gaan met de voorwaarden.');
        return;
    }

    // Simulate successful registration
    console.log('Registratie succesvol:', formData);
    setSuccess(true);
    // In a real app, you would redirect here or handle the session
  };

  if (success) {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.formContainer}>
                <h1>Registratie succesvol!</h1>
                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                    Je account is aangemaakt. Je kunt nu inloggen.
                </p>
                <div className={styles.links}>
                    <Link href="/login">Naar Login</Link>
                </div>
            </div>
      </div>
    )
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formContainer}>
        <h1>Registreren</h1>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="naam">Volledige Naam</label>
            <input
              type="text"
              id="naam"
              name="naam"
              value={formData.naam}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mailadres</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Wachtwoord</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Herhaal Wachtwoord</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="agreed"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="agreed">
              Ik ga akkoord met de <Link href="/terms" style={{textDecoration: 'underline'}}>voorwaarden</Link>.
            </label>
          </div>
          <button type="submit" className={styles.submitButton} disabled={!agreed}>
            Account aanmaken
          </button>
        </form>
        <div className={styles.links}>
          <Link href="/login">Heb je al een account? Inloggen.</Link>
        </div>
      </div>
    </div>
  );
}
