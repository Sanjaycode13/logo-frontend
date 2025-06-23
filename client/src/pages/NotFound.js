import React from 'react';
import PageLayout from '../components/PageLayout';

const NotFound = () => (
  <PageLayout title="404 – Page Not Found">
    <p>Oops! The page you're looking for doesn’t exist. Maybe try going back to the <a href="/">home page</a>.</p>
  </PageLayout>
);

export default NotFound;
