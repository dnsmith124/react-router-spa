import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import SiteLogo from './SiteLogo';
import CurrentTrack from '../CurrentTrack';
import logoImage from '../../static/images/sitelogo.png';
import '../../sass/components/header.scss';

const Header = ({ pageTitle }) => {

  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [refreshTimer, setRefreshTimer] = useState(false);
  const [authToken, setAuthToken] = useState("BQCL20Vcj1BcGzjGehjEAGnx1LBwM_IZWHEdudUYXkyM42v5_w1FuYpFH3l7cpXv-e079kTnTuvG10UJVIc5kBF2Zb-MxZOTotowgNynumFZ9oWtLqd-Q91qeuYRKFIOE5dGpQk-iVdTEH06Wzc5JJs");
  

  const generateNewAuthToken = () => {

  }
  
  const checkCurrentlyPlaying = () => {
    const headers = { 
      'Content-Type': 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer' + authToken 
    }
    fetch('https://api.spotify.com/v1/me/player/currently-playing', { headers })
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        setNowPlaying(data.is_playing);
        setCurrentTrack(data.item);
      })
      .catch(error => {
        getLastPlayed();
      }
    );
  } 

  const getLastPlayed = () => {
    const headers = { 
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer' + authToken 
    }
    fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', { headers })
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        // setNowPlaying(data.is_playing);
        setCurrentTrack(data.items[0].track);
        console.log(data.items[0]);
      })
      .catch(error => {
        console.error('The authorization code has expired David, go generate a new one.');
      }
    );
  }

  useEffect(() => {
    checkCurrentlyPlaying();
  },[refreshTimer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshTimer(!refreshTimer);
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div className="header-container">
      <div className="top-header row align-items-center ">
        <div className="col-md">
          <SiteLogo src={logoImage} />
        </div>
        <div className="col-md header-right">
          <div className="col-md track">
            { (currentTrack != null) && 
              <CurrentTrack track={currentTrack} nowPlaying={nowPlaying} />
            }
          </div>
          <div className="col-md menu">
            <NavigationMenu />
          </div>
        </div>
      </div>
      <h1>{pageTitle}</h1>
    </div>
  );
}

export default Header;