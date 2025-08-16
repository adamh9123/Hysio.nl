"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import styles from './SupportPage.module.css';

const faqData = [
  {
    question: 'Hoe reset ik mijn wachtwoord?',
    answer: 'U kunt uw wachtwoord resetten door naar de login-pagina te gaan en op de link "Wachtwoord vergeten?" te klikken. Volg de instructies die naar uw e-mailadres worden gestuurd.',
  },
  {
    question: 'Met welke EPD’s is Hysio te integreren?',
    answer: 'Momenteel werken we aan integraties met de meestgebruikte EPD-systemen in Nederland. Een volledige lijst van ondersteunde systemen zal binnenkort beschikbaar zijn op onze Hysio Pro pagina.',
  },
  {
    question: 'Hoe veilig is mijn patiëntdata?',
    answer: 'Zeer veilig. We gebruiken end-to-end encryptie en slaan alle data op binnen gecertificeerde Nederlandse datacenters. Ons platform is volledig AVG-proof ontworpen.',
  },
  {
    question: 'Wat kost Hysio Pro na de proefperiode?',
    answer: 'Na de gratis proefperiode kunt u kiezen uit verschillende abonnementen die passen bij de grootte van uw praktijk. De prijsinformatie zal binnenkort op de website worden gepubliceerd.',
  },
];

// Reusable FAQ Item Component
const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <button className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`} onClick={onClick} aria-expanded={isOpen}>
        {item.question}
        <FontAwesomeIcon icon={faPlus} className={styles.faqIcon} />
      </button>
      <div className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};


export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Support</h1>
          <p>Kom je er niet uit? Vind hieronder antwoorden op veelgestelde vragen of neem contact op met ons supportteam.</p>
        </header>

        <section className={styles.faqSection}>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </section>

        <section className={styles.contactSupport}>
            <FontAwesomeIcon icon={faLifeRing} className={styles.contactIcon} />
            <h2>Niet gevonden wat je zocht?</h2>
            <p>
                Mail ons op <a href="mailto:support@hysio.nl">support@hysio.nl</a> of vul het <a href="/contact">contactformulier</a> in.
            </p>
        </section>
      </div>
    </div>
  );
}
