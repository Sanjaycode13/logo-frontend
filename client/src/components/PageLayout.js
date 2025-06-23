import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ title, children }) => (
  <div>
    <Navbar />
    <main className="page-container">
      <h1 className="page-title">{title}</h1>
      <div className="page-content">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default PageLayout;
