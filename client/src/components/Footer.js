import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-names left-name">KVS Aditya – 1GA22IS068</div>
    <div className="footer-names right-name">Sanjay K S – 1GA22IS138</div>

    <p>&copy; {new Date().getFullYear()} Logo Design Hub. All rights reserved.</p>
    <p>
      <a href="/privacy-policy">Privacy Policy</a> | 
      <a href="/terms-of-service"> Terms of Service</a>
    </p>
    <div className="footer-socials">
      <a href="https://instagram.com/logodesignhub" target="_blank" rel="noreferrer">Instagram</a>
      <a href="mailto:team@logodesignhub.com">Email</a>
    </div>
  </footer>
);

export default Footer;
