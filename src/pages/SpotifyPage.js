import React from 'react';
import Layout from '../components/Layout';
import Spotify  from "../components/Spotify";
import '../sass/pages/spotifyPage.scss';

const SpotifyPage = () => {

  return (
    <Layout pageTitle="Spotify API Example">
      <Spotify />
    </Layout>
  );
}

export default SpotifyPage;