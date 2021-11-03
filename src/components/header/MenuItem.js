import React from 'react';
import { Link } from 'react-router-dom';


const MenuItem = ({ isInternal, url, children, target }) => {

  const link = (isInternal) 
    ? <Link to={url} className="nav-link" target={target} >{children}</Link> 
    : <a href={url} className="nav-link" target={target} >{children}</a>;

  return (
    <div className="nav-item">
      {link}
    </div>
  );
}

export default MenuItem;