import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  navigationBarContainer,
  navigationLink,
  logoContainer,
  activeNavigationLink,
} from './styles';
import logo from '../../assets/images/Logo.png';

const NavigationBar = () => {
  return (
    <div className={navigationBarContainer}>
      <div className={logoContainer}>
        <img src={logo} width="60px" height="50px" />
      </div>
      <NavLink
        exact
        to="/"
        className={navigationLink}
        activeClassName={activeNavigationLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/gfs"
        className={navigationLink}
        activeClassName={activeNavigationLink}
      >
        GFS
      </NavLink>
      <NavLink
        to="/satellite-imagery"
        className={navigationLink}
        activeClassName={activeNavigationLink}
      >
        Satellite Imagery
      </NavLink>
    </div>
  );
};

export default NavigationBar;
