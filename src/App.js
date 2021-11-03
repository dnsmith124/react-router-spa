import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SubPage from './pages/SubPage';
import BlogPage from './pages/BlogPage.js';
import SinglePostPage from './pages/SinglePostPage';
import UserPage from './pages/UserPage';
import AboutPage from './pages/AboutPage.js';
import SpotifyPage from './pages/SpotifyPage.js';
import reducer,{ initialState } from './reducer';
import { DataLayer } from './DataLayer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {


  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:id" component={SinglePostPage} />
      <Route path="/user/:id" component={UserPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/spotify-example" 
        render={() => (
          <DataLayer initialState={initialState} reducer={reducer}>
            <SpotifyPage />
          </DataLayer>
        )}
      />
      <Route path="/:id" component={SubPage} />
    </Switch>
  )
}

export default App;