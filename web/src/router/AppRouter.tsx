import React, {useEffect, useState} from 'react';
import {css} from 'emotion';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import Satellites from '../pages/Satallites/Satellites';
import { AppProvider, useAppDispatch, useAppState } from '../appContext';
import { AppConfig } from '../appContext.definitions';
import Axios from 'axios';
import { SatelliteProvider } from '../pages/Satallites/satelliteContext';
import { routes } from './routes';

const appContainer = css`
  background: #eeeeee;
`;

export const AppRouter: React.FC = () => {
  const {config} = useAppState()
  const appDispatch = useAppDispatch()
  
  useEffect(()=>{
    if (!config) {
      Axios.get<AppConfig>(window.location.origin + '/config.json')
        .then((res) => {
            appDispatch({type: 'setConfig', data:res.data});
        })
    }
  }, [])

  return (<>
    {config && (<Router>
      <div className={appContainer}>
        <NavigationBar />
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.about}>
            <div>About</div>
          </Route>
          <Route path={routes.gfs}>
            <div>GFS Model</div>
          </Route>
          <SatelliteProvider>
            <Route exact path={routes.satellites} component={Satellites} />
          </SatelliteProvider>
          <Route>
            <div>This page was not found</div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>)}
    </>
  );
};
