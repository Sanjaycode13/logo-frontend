import React, { useState } from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://logo-backend-vilo.onrender.com/api/contact', form);
      setStatus("✅ Thanks for reaching out! We'll get back to you soon.");
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <PageLayout title="Get in Touch With Us">
      <p>
        Whether you have a question about design, want to share feedback, or just say hello — we're all ears.
        Fill out the form below and we’ll get back to you within 1–2 business days.
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            required
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={form.email}
            required
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Message</label><br />
          <textarea
            name="message"
            rows="5"
            value={form.message}
            required
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Send Message</button>
      </form>

      {status && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{status}</p>}

      <h3 style={{ marginTop: '40px' }}>You can also reach us at:</h3>
      <ul>
        <li>📧 <a href="mailto:team@logodesignhub.com">team@logodesignhub.com</a></li>
        <li>📷 Instagram: <a href="https://instagram.com/logodesignhub">@logodesignhub</a></li>
        <li>📍 Bengaluru, India</li>
      </ul>
    </PageLayout>
  );
};

export default Contact;
