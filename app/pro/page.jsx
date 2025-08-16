import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faEnvelopeOpenText, faSearch, faUsers, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './ProPage.module.css';

export default function HysioProPage() {
  const features = [
    {
      icon: faFileSignature,
      title: 'Medical Scribe AI',
      description: 'Laat AI je intakes en verslagen opstellen – bespaar 30% tijd op administratie.',
    },
    {
      icon: faEnvelopeOpenText,
      title: 'SmartMail',
      description: 'Genereer professionele e-mails naar patiënten of collega’s in seconden.',
    },
    {
      icon: faSearch,
      title: 'Hysio Research',
      description: 'Vind en genereer razendsnel samenvattingen van wetenschappelijke literatuur.',
    },
    {
      icon: faUsers,
      title: 'Community & Refer',
      description: 'Deel kennis, vraag collega’s om hulp en nodig ze uit voor het platform.',
    },
  ];

  const benefits = [
    'Bespaar tot 40% tijd op administratie',
    'Evidence-based ondersteuning direct beschikbaar',
    'Volledig AVG-proof en up-to-date met KNGF-richtlijnen',
    'Verbeter de kwaliteit van je verslaglegging',
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles.hero} ${styles.container}`}>
        <h1>Werk slimmer, behandel beter met Hysio Pro</h1>
        <p>
          Hysio Pro biedt AI-ondersteuning voor al je verslaglegging, klinisch redeneren en kennisbronnen – geïntegreerd in één platform.
        </p>
        <Link href="/register" className={styles.heroButton}>
          Registreer voor Hysio Pro
        </Link>
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.features}`}>
        <div className={styles.container}>
          <h2>Kernfunctionaliteiten van Hysio Pro</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <article key={index} className={styles.featureCard}>
                <FontAwesomeIcon icon={feature.icon} className={styles.featureIcon} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${styles.section} ${styles.benefits}`}>
        <div className={styles.container}>
          <h2>Jouw voordelen op een rij</h2>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`${styles.section} ${styles.cta}`}>
        <div className={styles.container}>
            <h2>Klaar om te starten met Hysio Pro?</h2>
            <Link href="/register" className={styles.ctaButton}>
                Meld je nu aan
            </Link>
        </div>
      </section>
    </div>
  );
}
