import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {
  navigationLink,
  activeNavigationLink,
} from './styles';
import { routes } from '../../router/routes';

const NavigationBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <div className="navbar-item">
          <Link
            to={routes.home}
            className={navigationLink}
          >
            Cocoa Clouds
          </Link>
        </div>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">
          <NavLink
            to={routes.gfs}
            className={navigationLink}
            activeClassName={activeNavigationLink}
          >
            GFS
          </NavLink>
        </div>

        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <div
              className={navigationLink}
            >
              Satellite Imagery
            </div>
          </div>

          <div className="navbar-dropdown">
            <a className="navbar-item">
              <Link
                to={routes.satellitesIR}
                className={navigationLink}
              >
                Infared
              </Link>
            </a>
            <a className="navbar-item">
              <Link
                to={routes.satellitesWV}
                className={navigationLink}
              >
                Water Vapor
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default NavigationBar;
