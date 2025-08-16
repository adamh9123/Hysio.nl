"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faFileSignature, faEnvelopeOpenText, faSearch,
  faUsers, faGraduationCap, faTimes
} from '@fortawesome/free-solid-svg-icons';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
    const [showNotification, setShowNotification] = useState(true);

    const navItems = [
        { icon: faTachometerAlt, label: 'Dashboard', href: '/dashboard', active: true },
        { icon: faFileSignature, label: 'Scribe', href: '/scribe' },
        { icon: faEnvelopeOpenText, label: 'SmartMail', href: '/smartmail' },
        { icon: faSearch, label: 'Research', href: '/research' },
        { icon: faGraduationCap, label: 'Education', href: '/education', comingSoon: true },
        { icon: faUsers, label: 'Community', href: '/community', comingSoon: true },
    ];

    const toolCards = [
        { title: 'Medical Scribe', description: 'AI-assistent voor je verslaglegging.', link: '/scribe' },
        { title: 'SmartMail', description: 'Genereer professionele e-mails.', link: '/smartmail' },
        { title: 'Hysio Research', description: 'Zoek en vind relevante literatuur.', link: '/research' },
    ];

    return (
        <div className={styles.dashboardLayout}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <Link href="/">
                        Hysio<span>.nl</span>
                    </Link>
                </div>
                <ul className={styles.sidebarNav}>
                    {navItems.map(item => (
                        <li key={item.label} className={`${styles.navItem} ${item.comingSoon ? styles.disabled : ''}`}>
                            <Link href={item.comingSoon ? '#' : item.href} className={item.active ? styles.active : ''}>
                                <FontAwesomeIcon icon={item.icon} className={styles.navIcon} />
                                <span>{item.label}</span>
                                {item.comingSoon && <span className={styles.comingSoonBadge}>Soon</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            <main className={styles.mainContent}>
                <header className={styles.header}>
                    <div>
                        <h2>Welkom terug, Alex!</h2>
                        <p>Kies een tool om je werkdag makkelijker te maken.</p>
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.profileAvatar}>A</div>
                        <span>Alex de Vries</span>
                    </div>
                </header>

                {showNotification && (
                    <div className={styles.notification}>
                        <span>Nieuw: Probeer nu het Hysio Refer programma en verdien een gratis maand!</span>
                        <button onClick={() => setShowNotification(false)} className={styles.closeButton} aria-label="Sluit melding">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                )}

                <section className={styles.cardsGrid}>
                    {toolCards.map(card => (
                        <article key={card.title} className={styles.card}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <Link href={card.link}>Openen &rarr;</Link>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}
