import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  navigationBarContainer,
  navigationLink,
  logoContainer,
  activeNavigationLink,
} from './styles';
import logo from '../../assets/images/Logo.png';
import { routes } from '../../router/routes';

const NavigationBar = () => {
  return (
    <div className={navigationBarContainer}>
      <div className={logoContainer}>
        <img src={logo} width="60px" height="50px" />
      </div>
      <NavLink
        exact
        to={routes.home}
        className={navigationLink}
        activeClassName={activeNavigationLink}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.gfs}
        className={navigationLink}
        activeClassName={activeNavigationLink}
      >
        GFS
      </NavLink>
      <NavLink
        to={routes.satellites}
        className={navigationLink}
        activeClassName={activeNavigationLink}
      >
        Satellite Imagery
      </NavLink>
    </div>
  );
};

export default NavigationBar;
