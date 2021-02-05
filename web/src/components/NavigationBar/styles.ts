import {css} from 'emotion';

export const navigationBarContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;
  box-shadow: 2px 0 5px 0px #888;
  background: #efebff;
  box-sizing: border-box;
`;

export const logoContainer = css`
  box-sizing: border-box;
  margin: 0px 10px;
`;

export const navigationLink = css`
  color: black;
  outline: none;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  padding: 0px 10px;
`;
export const activeNavigationLink = css`
  ${navigationLink};
  color: #3cacae;
`;
