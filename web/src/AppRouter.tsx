import React, {useState} from 'react';
import {css} from 'emotion';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Satellites from './pages/Satallites';

const appContainer = css`
  background: #eeeeee;
`;

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className={appContainer}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/gfs">
            <div>GFS Model</div>
          </Route>
          <Route path="/satellite-imagery" component={Satellites} />
          <Route>
            <div>This page was not found</div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
