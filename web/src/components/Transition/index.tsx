import React from 'react';
import {css} from 'emotion';
import {TRANSITION_DURATION} from '../../constants';

const transitionBaseClass = css`
  display: flex;
  position: relative;
  min-height: 100vh;
  transition: all ${TRANSITION_DURATION}s;
`;

interface TransitionProps {
  trigger: boolean;
  styleOverrides?: {}; // necessary style overrides
  transitionOverrides: {};
}

const Transition: React.FC<React.PropsWithChildren<TransitionProps>> = ({
  trigger,
  styleOverrides,
  transitionOverrides = {},
  children,
}) => {
  return (
    <div
      className={transitionBaseClass}
      style={
        trigger
          ? {...styleOverrides, ...transitionOverrides}
          : {...styleOverrides}
      }
    >
      {children}
    </div>
  );
};

export default Transition;
