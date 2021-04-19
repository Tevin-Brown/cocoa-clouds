import React, {useEffect} from 'react';
import {css} from 'emotion';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import Satellites from '../pages/Satallites/Satellites';
import { useAppDispatch, useAppState } from '../appContext';
import { AppConfig } from '../appContext.definitions';
import Axios from 'axios';
import { SatelliteProvider } from '../pages/Satallites/satelliteContext';
import { routes } from './routes';
import GFS from '../pages/gfs';

const appContainer = css`
  background: #eeeeee;
`;

export const AppRouter: React.FC = () => {
  const {config} = useAppState()
  const appDispatch = useAppDispatch()
  
  useEffect(()=>{
    if (!config) {
      Axios.get<AppConfig>(`${process.env.PUBLIC_URL}/config.json`)
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
            <Route exact path={routes.gfs} component={GFS} />
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
