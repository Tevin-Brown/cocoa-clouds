import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import SideBar from './components/SideBar';
import {css} from 'emotion';
import WaterVapor from './tabs/WaterVapor';
import SatellitesHome from './tabs/SatellitesHome';
import {CircularProgress} from '@material-ui/core';
import {
  getSattelliteDirectories,
  getAllSatelliteDirectories,
} from '../../services/satelliteServices';
import {async} from 'q';

const satelliteContainer = css`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`;
const routeMap = {
  ABI_GeoColor: 'ABI Geo Color',
  ABI_TrueColor: 'ABI True Color',
  color_IR: 'Infared',
  color_WV: 'Water Vapor',
};
export interface SatelliteDirectories {
  ABI_GeoColor: [];
  ABI_TrueColor: [];
  color_IR: [];
  color_WV: [];
}
const Satellites = () => {
  const [directories, setDirectories] = useState<SatelliteDirectories>();
  useEffect(() => {
    if (!directories) {
      getAllSatelliteDirectories(setDirectories);
    }
  }, [directories]);
  console.log(directories);
  return (
    <div className={satelliteContainer}>
      <SideBar />
      {!directories ? (
        <CircularProgress />
      ) : (
        <Switch>
          <Route exact path="/satellite-imagery" component={SatellitesHome} />
          <Route exact path="/satellite-imagery/WV" component={WaterVapor} />
        </Switch>
      )}
    </div>
  );
};

export default Satellites;
