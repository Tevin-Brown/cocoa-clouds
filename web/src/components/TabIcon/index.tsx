import React, {useState} from 'react';
import {tabIcon} from './styles';
import Icon from '../../assets/icons/chevron_right.svg';
import Transition from '../Transition';
interface TabIconProps {
  clickHandler: () => void;
  closeNavigation: boolean;
}
const TabIcon = ({clickHandler, closeNavigation}: TabIconProps) => {
  return (
    <div className={tabIcon} onClick={clickHandler}>
      <Transition
        trigger={!closeNavigation}
        styleOverrides={{minHeight: '100%'}}
        transitionOverrides={{transform: 'rotate(180deg)'}}
      >
        <img src={Icon} />
      </Transition>
    </div>
  );
};

export default TabIcon;
