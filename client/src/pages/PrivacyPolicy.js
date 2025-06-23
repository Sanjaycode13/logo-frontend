import React from 'react';
import PageLayout from '../components/PageLayout';

const PrivacyPolicy = () => (
  <PageLayout title="Privacy Policy">
    <p>
      Your privacy is important to us. This policy outlines what data we collect, why we collect it, and how we protect it.
    </p>

    <h2>What We Collect</h2>
    <ul>
      <li>Your name and email (via contact forms)</li>
      <li>Analytics data (pages visited, time spent)</li>
      <li>Purchase and download history (for product access)</li>
    </ul>

    <h2>How We Use Your Data</h2>
    <p>
      Data is used strictly to improve our website, send helpful resources, and notify you of updates. We do not sell your data to third parties.
    </p>

    <h2>Data Security</h2>
    <p>
      We use encrypted connections (HTTPS), and secure payment gateways for transactions. All user data is stored securely on protected servers.
    </p>
  </PageLayout>
);

export default PrivacyPolicy;
