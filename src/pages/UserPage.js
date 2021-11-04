import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import User from '../components/User';

const UserPage = ( {path} ) => {

  return (

    <Layout pageTitle="Github Info">
      <User path={path} />
    </Layout>
    
  )
}

export default UserPage;