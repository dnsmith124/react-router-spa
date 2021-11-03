
import React from "react";
import "../sass/components/song-row.scss";

function SongRow({ track }) {
  return (
    <div className="song-row">
      <img src={track.album.images[0].url} alt="" className="song-row__album" />
      <div className="song-row__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;