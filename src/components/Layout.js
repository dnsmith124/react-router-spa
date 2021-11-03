import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Helmet } from "react-helmet";
import '../sass/components/layout.scss';

const Layout = ({ pageTitle, children }) => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="page-container container-xl">
        <header>
          <Header pageTitle={pageTitle} />
        </header>
        <div id="main-container" className="main-container">
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;