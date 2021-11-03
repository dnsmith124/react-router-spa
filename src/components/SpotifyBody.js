import React from "react";
import "../sass/components/spotify-body.scss";
import SpotifyHeader from "./SpotifyHeader";
import { useDataLayerValue } from "../DataLayer";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow";

function SpotifyBody({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="spotify-body">
      <SpotifyHeader spotify={spotify} />
      {/* <div className="spotify-body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="spotify-body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="spotify-body__songs">
        <div className="spotify-body__icons">
          <PlayCircleFilled className="spotify-body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div> */}
    </div>
  );
}

export default SpotifyBody;