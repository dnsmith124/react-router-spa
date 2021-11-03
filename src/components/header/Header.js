import React from 'react';
import NavigationMenu from './NavigationMenu';
import SiteLogo from './SiteLogo';
import logoImage from '../../static/images/sitelogo.png';
import '../../sass/components/header.scss';

const Header = ({ pageTitle }) => {

  return (
    <div className="header-container">
      <div className="top-header row align-items-center ">
        <div className="col-md">
          <SiteLogo src={logoImage} />
        </div>
        <div className="col-md">
          <NavigationMenu />
        </div>
      </div>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default Header;