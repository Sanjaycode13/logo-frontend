import React from 'react';
import PageLayout from '../components/PageLayout';

const Blog = () => (
  <PageLayout title="Logo Design Blog & Articles">
    <p>
      Dive into weekly articles covering everything from design basics to pro-level branding tactics. Learn from
      real-world designers and industry trends.
    </p>

    <h2>Recent Posts</h2>
    <ul>
      <li><strong>[2025-06-15] 7 Mistakes Beginners Make in Logo Design</strong></li>
      <li><strong>[2025-06-08] How to Choose Fonts That Match Your Brand</strong></li>
      <li><strong>[2025-05-30] Canva vs Adobe Illustrator: What Should You Use?</strong></li>
    </ul>

    <h3>Featured Series</h3>
    <p>
      Don't miss our 5-part series: <em>“From Sketch to Symbol”</em> — guiding you through the entire logo process from pen-and-paper to digital delivery.
    </p>
  </PageLayout>
);

export default Blog;
