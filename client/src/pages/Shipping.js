import React from 'react';
import PageLayout from '../components/PageLayout';

const Shipping = () => (
  <PageLayout title="Shipping Policy">
    <p>
      Most of our resources are delivered digitally. However, for printed merchandise or guides, we offer shipping across India.
    </p>

    <h2>Shipping Timeline</h2>
    <ul>
      <li>Digital Products: Instant download after payment.</li>
      <li>Printed Kits: Dispatched in 3–5 business days.</li>
    </ul>

    <h2>Shipping Charges</h2>
    <p>Shipping is free for orders above ₹499. For smaller orders, a ₹40 flat fee applies.</p>
  </PageLayout>
);

export default Shipping;
