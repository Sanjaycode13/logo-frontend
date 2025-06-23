import React from 'react';
import PageLayout from '../components/PageLayout';

const Home = () => (
  <PageLayout title="Welcome to Logo Design Hub">
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <p style={styles.intro}>
          Designing a logo isn’t just about picking colors and shapes — it’s about telling a brand’s story
          through a powerful visual symbol. At <strong>Logo Design Hub</strong>, we guide you through every
          step of the journey.
        </p>
      </div>
    </section>

    <section style={styles.section}>
      <h2 style={styles.heading}>🌟 Why Learn Logo Design?</h2>
      <ul style={styles.list}>
        <li>💡 Express brand identity visually</li>
        <li>🚀 Build a freelance or design career</li>
        <li>🛠️ Gain skills in creativity, software, and branding</li>
      </ul>
    </section>

    <section style={styles.sectionAlt}>
      <h2 style={styles.heading}>📘 What You’ll Find Here</h2>
      <ol style={styles.list}>
        <li><strong>Tutorials:</strong> From beginner basics to pro tricks.</li>
        <li><strong>Templates:</strong> Downloadable design files to jumpstart ideas.</li>
        <li><strong>Services:</strong> Request expert feedback or get logos custom made.</li>
        <li><strong>Blog:</strong> Stay updated with trends and real-world insights.</li>
      </ol>
    </section>

    <section style={styles.cta}>
      <h2>🎯 Start Now</h2>
      <p>
        Dive into our <a href="/blog" style={styles.link}>Blog</a> or check out our <a href="/services" style={styles.link}>Services</a> to begin your logo journey.
      </p>
    </section>
  </PageLayout>
);

const styles = {
  hero: {
    backgroundImage: 'url("/images/hero.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    marginBottom: '30px',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '700px',
    textAlign: 'center'
  },
  intro: {
    fontSize: '1.2rem',
    lineHeight: '1.8'
  },
  section: {
    backgroundImage: 'url("/images/learn.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '25px'
  },
  sectionAlt: {
    backgroundImage: 'url("/images/find.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '25px'
  },
  heading: {
    marginBottom: '10px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '5px'
  },
  list: {
    lineHeight: '1.8',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '15px',
    borderRadius: '8px',
    listStyleType: 'disc',
    paddingLeft: '25px'
  },
  cta: {
    textAlign: 'center',
    padding: '25px',
    background: '#e1f5fe',
    borderRadius: '10px',
    marginTop: '40px'
  },
  link: {
    color: '#1976d2',
    textDecoration: 'underline',
    fontWeight: '500'
  }
};

export default Home;
