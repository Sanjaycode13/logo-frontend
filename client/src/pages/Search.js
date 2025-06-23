import React from 'react';
import PageLayout from '../components/PageLayout';

const Search = () => (
  <PageLayout title="Search Results">
    <p>Search our library of blog posts, tutorials, and products.</p>

    <h3>Example Queries:</h3>
    <ul>
      <li>"Minimal logo design"</li>
      <li>"Free logo templates"</li>
      <li>"Best logo fonts for 2025"</li>
    </ul>

    <p>Search functionality is under development. Try exploring our <a href="/blog">Blog</a> or <a href="/product">Products</a>.</p>
  </PageLayout>
);

export default Search;
