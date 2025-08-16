"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    onderwerp: '',
    bericht: '',
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    // Basic validation
    if (!formData.naam || !formData.email || !formData.onderwerp || !formData.bericht) {
      setError('Vul alle velden in a.u.b.');
      setStatus('error');
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // On success:
    setStatus('success');
    setFormData({ naam: '', email: '', onderwerp: '', bericht: '' });

    // On failure (example):
    // setError('Er is iets misgegaan. Probeer het later opnieuw.');
    // setStatus('error');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Contact</h1>
          <p>Vragen of suggesties? We horen graag van je.</p>
        </header>

        <div className={styles.contentGrid}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h2>Contactgegevens</h2>
            <div className={styles.infoItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.infoIcon} />
              <a href="tel:010-1234567">010-1234567</a>
            </div>
            <div className={styles.infoItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.infoIcon} />
              <a href="mailto:support@hysio.nl">support@hysio.nl</a>
            </div>
            <div className={styles.infoItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.infoIcon} />
              <span>Rotterdam, Nederland</span>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                Bedankt, je bericht is verzonden! We nemen zo snel mogelijk contact met je op.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="naam">Naam</label>
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
                  <label htmlFor="onderwerp">Onderwerp</label>
                  <input
                    type="text"
                    id="onderwerp"
                    name="onderwerp"
                    value={formData.onderwerp}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="bericht">Bericht</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    value={formData.bericht}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Versturen...' : 'Verstuur bericht'}
                </button>
                {status === 'error' && <p className={styles.errorMessage}>{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
