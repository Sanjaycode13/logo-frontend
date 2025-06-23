import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Scroll-to-top button
import ScrollToTop from './components/ScrollToTop';

// Import your 19 pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Service from './pages/Service';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';
import Search from './pages/Search';
import News from './pages/News';
import Sitemap from './pages/Sitemap';
import Careers from './pages/Careers';
import Expert from './pages/Expert';
import Disclosure from './pages/Disclosure';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Service />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/search" element={<Search />} />
          <Route path="/news" element={<News />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
