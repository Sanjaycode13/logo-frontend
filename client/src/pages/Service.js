import React from 'react';
import PageLayout from '../components/PageLayout';

const Service = () => (
  <PageLayout title="Our Logo Design Services">
    <p>
      Need professional help? We offer personalized design services to elevate your brand.
    </p>

    <h2>Services Offered</h2>
    <ul>
      <li><strong>Custom Logo Design (₹999)</strong> – 3 concepts, 2 revisions, delivered in multiple formats.</li>
      <li><strong>Logo Feedback & Improvement (₹299)</strong> – Submit your logo for expert critique and improvement tips.</li>
      <li><strong>Startup Branding Package (₹2999)</strong> – Logo, brand palette, typography, and business card mockups.</li>
    </ul>

    <h3>How to Book a Service</h3>
    <p>Fill the request form on our Contact page or email <a href="mailto:services@logodesignhub.com">services@logodesignhub.com</a></p>

    <p><em>Note: Limited slots per month to ensure quality service delivery.</em></p>
  </PageLayout>
);

export default Service;
