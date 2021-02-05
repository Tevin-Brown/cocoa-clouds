import React, {useState} from 'react';
import {css} from 'emotion';
import {NavLink} from 'react-router-dom';

const navigationLink = css`
  font-size: 16px;
  align-self: flex-end;
  width: 100%;
  color: black;
  text-align: right;
  text-decoration: none;
  padding-right: 5px;
`;

const navigationLinkActive = css`
  ${navigationLink};
  border-right: 5px solid #3cacae;
`;

const navLinkWrapper = css`
  display: flex;
  height: 30px;
  padding: 10px 0px;
  border-bottom: 1px solid #888;
`;

const sideBarContainer = css`
  display: flex;
  flex-direction: column;
  width: 200px;
  position: fixed;
  top:0
  left: 0;
`;

const SideBar = () => {
  return (
    <div className={sideBarContainer}>
      <div className={navLinkWrapper}>
        <NavLink
          exact
          to="/satellite-imagery"
          className={navigationLink}
          activeClassName={navigationLinkActive}
        >
          Satellites
        </NavLink>
      </div>
      <div className={navLinkWrapper}>
        <NavLink
          to="/satellite-imagery/WV"
          className={navigationLink}
          activeClassName={navigationLinkActive}
        >
          Water Vapor Imagery
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
