import React from 'react';
import MenuItem from './MenuItem'

const NavigationMenu = () => {

  return (
    <div className="nav-menu nav justify-content-end">
      <MenuItem isInternal={true} url="/about">About</MenuItem>
      <MenuItem isInternal={true} url="/blog">Blog</MenuItem>
      <MenuItem isInternal={false} url="/user/dnsmith124">GitHub</MenuItem>
      <MenuItem isInternal={false} url="/spotify-example">Spotify API Example</MenuItem>
    </div>
  );
}

export default NavigationMenu;