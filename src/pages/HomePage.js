import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        <Link to="/user/dnsmith124">dnsmith124</Link> on GitHub.
      </p>
    </Layout>
  )
}

export default HomePage;