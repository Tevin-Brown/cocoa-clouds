import React, {ReactNode} from 'react';
import {cardContainer} from './styles';
interface CardProps {
  styleOverrides?: {};
  children?: ReactNode;
}

const Card: React.FC = ({styleOverrides, children}: CardProps) => {
  return (
    <div className={cardContainer} style={styleOverrides}>
      {children}
    </div>
  );
};

export default Card;
