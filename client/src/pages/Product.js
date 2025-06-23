import React from 'react';
import PageLayout from '../components/PageLayout';

const Product = () => (
  <PageLayout title="Logo Design Resources">
    <p>
      Explore our curated collection of downloadable logo design resources. These tools are designed to help you
      build logos faster and more creatively.
    </p>

    <h2>Available Products</h2>
    <ul>
      <li><strong>Minimal Logo Templates Pack (Free)</strong> – 20 customizable logos in PNG, SVG, and PSD formats.</li>
      <li><strong>Brand Identity Kit (₹199)</strong> – Complete branding guidelines, mockups, and typography kits.</li>
      <li><strong>eBook: The Logo Design Blueprint (₹149)</strong> – 70+ pages of insights, tools, and client strategies.</li>
    </ul>

    <h3>How to Access</h3>
    <ol>
      <li>Browse the product list.</li>
      <li>Click to preview or download.</li>
      <li>For paid items, complete a secure Razorpay transaction.</li>
    </ol>

    <p><em>Note: All downloads are for personal or educational use only. Redistribution is prohibited.</em></p>
  </PageLayout>
);

export default Product;
