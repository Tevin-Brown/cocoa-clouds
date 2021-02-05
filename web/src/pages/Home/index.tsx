import React from 'react';
import {css} from 'emotion';
import Card from '../../components/Card';
const centeredContainer = css`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  width: 80vw;
  min-height: calc(100vh - 250px);
  box-sizing: border-box;
  margin: 25px auto;
`;

const Home: React.FC = () => {
  return (
    <div className={centeredContainer}>
      <Card>Home</Card>
    </div>
  );
};

export default Home;
