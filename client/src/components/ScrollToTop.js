import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    visible && (
      <button onClick={scrollToTop} style={styles.button}>
        ↑
      </button>
    )
  );
};

const styles = {
  button: {
    position: 'fixed',
    right: '20px',
    bottom: '40px',
    fontSize: '22px',
    background: '#2575fc',
    color: 'white',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  }
};

export default ScrollToTop;
