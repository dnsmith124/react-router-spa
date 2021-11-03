import React from 'react';
import { Link } from 'react-router-dom';

const SiteLogo = ({ src }) => {

  return (
    <Link to="/" className="site-link"><img src={src}/></Link>
  );
}

export default SiteLogo;