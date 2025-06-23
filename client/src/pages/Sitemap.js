import React from 'react';
import PageLayout from '../components/PageLayout';

const Sitemap = () => (
  <PageLayout title="Website Sitemap">
    <p>Quick links to all pages on our site:</p>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/product">Products</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/terms-of-service">Terms of Service</a></li>
      <li><a href="/careers">Careers</a></li>
      <li><a href="/news">News</a></li>
    </ul>
  </PageLayout>
);

export default Sitemap;
