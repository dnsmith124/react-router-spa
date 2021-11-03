import React from "react";
import "../sass/components/spotify-sidebar.scss";
import SpotifySidebarOption from "./SpotifySidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../DataLayer";
import spotifyLogo from '../static/images/SpotifyLogo.png';

function SpotifySidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="spotify-logo"
        src={spotifyLogo}
        alt="Spotify logo"
      />

      <SpotifySidebarOption title="Home" Icon={HomeIcon} />
      <SpotifySidebarOption title="Search" Icon={SearchIcon} />
      <SpotifySidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SpotifySidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default SpotifySidebar;