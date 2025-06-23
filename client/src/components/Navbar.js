import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>🎨 LogoDesign</h2>
      <div style={styles.linksContainer}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.link,
              ...(location.pathname === item.path ? styles.activeLink : {})
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Products', path: '/product' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' }
];

const styles = {
  navbar: {
    background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  logo: {
    color: '#fff',
    margin: 0,
    fontSize: '24px'
  },
  linksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '10px'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
    paddingBottom: '2px',
    borderBottom: '2px solid transparent',
    transition: 'border 0.3s'
  },
  activeLink: {
    borderBottom: '2px solid #FFEB3B'
  }
};

export default Navbar;
