import React from "react";
import spotifyLogo from '../static/images/SpotifyLogo.png';
import "../sass/components/spotify-login.scss";

const SpotifyLogin = ({ loginUrl }) => {
  return (
    <div className="login">
      <img
        src={spotifyLogo}
        className="spotify-logo"
        alt="Spotify logo"
      />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default SpotifyLogin;