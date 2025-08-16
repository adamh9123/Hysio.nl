import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faBrain, faUsers } from '@fortawesome/free-solid-svg-icons';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles.hero} ${styles.container}`}>
        <div className={styles.heroText}>
          <h1>Meer tijd voor je vak. Minder gedoe.</h1>
          <p>
            Hysio.nl is je AI-assistent voor efficiënte verslaglegging en betere zorg – speciaal voor fysiotherapeuten.
          </p>
          <Link href="/register" className={styles.heroButton}>
            Probeer Hysio Pro gratis
          </Link>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="https://placehold.co/600x400/A5E1C5/003728?text=Fysio+met+Tablet"
            alt="Fysiotherapeut gebruikt Hysio Pro op tablet tijdens behandelplan overleg."
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.features}`}>
        <div className={styles.container}>
          <h2>De kernvoordelen van Hysio Pro</h2>
          <div className={styles.featuresGrid}>
            <article className={styles.featureCard}>
              <FontAwesomeIcon icon={faFileSignature} className={styles.featureIcon} />
              <h3>Automatische verslaglegging</h3>
              <p>Bespaar 30% admin tijd met AI die je verslagen voor je opstelt.</p>
            </article>
            <article className={styles.featureCard}>
              <FontAwesomeIcon icon={faBrain} className={styles.featureIcon} />
              <h3>Snelle richtlijn-ondersteuning</h3>
              <p>Vind evidence-based antwoorden en de juiste KNGF-richtlijnen binnen één klik.</p>
            </article>
            <article className={styles.featureCard}>
              <FontAwesomeIcon icon={faUsers} className={styles.featureIcon} />
              <h3>Community & Samenwerking</h3>
              <p>Deel kennis, stel vragen en werk samen met duizenden collega-fysio's.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section className={`${styles.section} ${styles.blogHighlights}`}>
        <div className={styles.container}>
          <h2>Laatste nieuws</h2>
          <div className={styles.blogGrid}>
            {/* Placeholder Blog Posts */}
            <article className={styles.blogCard}>
              <div className={styles.blogCardContent}>
                <h3>AI in de praktijk: 5 tips voor fysio's</h3>
                <p>Ontdek hoe je AI vandaag nog kunt inzetten om je praktijk te verbeteren.</p>
                <Link href="/blog/ai-in-de-praktijk">Lees meer &rarr;</Link>
              </div>
            </article>
            <article className={styles.blogCard}>
              <div className={styles.blogCardContent}>
                <h3>De toekomst van fysiotherapie is hier</h3>
                <p>Een diepe duik in de trends die de zorgsector de komende jaren zullen vormen.</p>
                <Link href="/blog/toekomst-van-fysio">Lees meer &rarr;</Link>
              </div>
            </article>
            <article className={styles.blogCard}>
              <div className={styles.blogCardContent}>
                <h3>Case Study: Hysio Pro bij FysioFit</h3>
                <p>Lees hoe FysioFit hun administratieve lasten met 40% verminderde.</p>
                <Link href="/blog/case-study-fysiofit">Lees meer &rarr;</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`${styles.section} ${styles.cta}`}>
          <h2>Klaar voor de volgende stap?</h2>
          <p>Start vandaag nog met Hysio Pro en ervaar de toekomst van fysiotherapie.</p>
          <Link href="/register" className={styles.ctaButton}>
            Start vandaag met Hysio Pro
          </Link>
      </section>
    </>
  );
}
