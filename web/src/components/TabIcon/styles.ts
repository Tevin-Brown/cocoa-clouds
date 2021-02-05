import {css} from 'emotion';

export const tabIcon = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 30px;
  min-height: 40px;
  position: fixed;
  top: 50px;
  left: 200px;
  box-shadow: 5px 0 5px 0px #888;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #ffffff;
  &:hover {
    cursor: pointer;
  }
  z-index: 2;
`;
