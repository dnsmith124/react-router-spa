import React from 'react';

const CurrentTrack = ({ track, nowPlaying }) => {


  return(
    <div className="current-track-container"> 
      <div className="component-title">
        { nowPlaying && <h5>Now Playing for David:</h5> }
        { !nowPlaying && <h5>Last Played for David:</h5> }
      </div>
      <div className="component-content">
        <img src={track.album.images[1].url} />
        <div className="name">
          <span className="track-name"><a href={track.album.external_urls.spotify} target="_blank" rel="noreferrer">{track.name}</a></span>
          <span className="artist-name">{track.artists[0].name}</span>
        </div>
      </div>
    </div>
  );
}

export default CurrentTrack;