import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogPage.module.css';

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'ai-in-de-praktijk',
      title: '5 Tips om AI in jouw praktijk te gebruiken',
      summary: 'Ontdek praktische manieren waarop Artificiële Intelligentie je dagelijkse werk als fysiotherapeut kan verlichten en verbeteren.',
      image: 'https://placehold.co/300x200/A5E1C5/003728?text=AI+Tips',
      category: 'AI in de Praktijk',
      date: '15 augustus 2025',
    },
    {
      slug: 'toekomst-van-fysio',
      title: 'De toekomst van fysiotherapie is data-gedreven',
      summary: 'Een diepe duik in de trends die de zorgsector de komende jaren zullen vormen, en hoe data daarbij een sleutelrol speelt.',
      image: 'https://placehold.co/300x200/5BC49E/FFFFFF?text=Data',
      category: 'Nieuws',
      date: '10 augustus 2025',
    },
    {
      slug: 'case-study-fysiofit',
      title: 'Case Study: Hysio Pro bij FysioFit',
      summary: 'Lees hoe FysioFit in Rotterdam hun administratieve lasten met 40% verminderde dankzij de implementatie van Hysio Pro.',
      image: 'https://placehold.co/300x200/004B3A/FFFFFF?text=Case+Study',
      category: 'Succesverhalen',
      date: '5 augustus 2025',
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Blog & Kennisbank</h1>
          <p>Praktische tips, nieuws en achtergrondverhalen uit de wereld van fysiotherapie en AI.</p>
        </header>

        <section className={styles.searchBar}>
          <input
            type="text"
            placeholder="Zoek artikelen..."
            className={styles.searchInput}
          />
        </section>

        <section className={styles.blogList}>
          {blogPosts.map((post) => (
            <article key={post.slug} className={styles.blogPost}>
              <div className={styles.postImage}>
                <Image
                  src={post.image}
                  alt={`Afbeelding voor blog post: ${post.title}`}
                  width={300}
                  height={200}
                />
              </div>
              <div className={styles.postContent}>
                <p className={styles.meta}>{post.category} - {post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <Link href={`/blog/${post.slug}`}>Lees meer &rarr;</Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
