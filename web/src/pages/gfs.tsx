
import { css } from 'emotion';
import React, { useState } from 'react';

const centeredContainer = css`
  display: flex;
  flex-direction: column;
  justify-content:center;
  width: 100vw;
  box-sizing: border-box;
  margin: 25px 50px;
`;

const GFS: React.FC = () => {
    const [index, setIndex]= useState<number>(1)
    
    const indexToString = (ind: number) => {
        if (ind<10){
            return '00' + ind
        }
        if (ind<100){
            return '0' + ind
        }
        return ind
    }

    const back = () => {
        if (index > 1){
            setIndex(self => self-1);
        }
    }
    const forward = () => {
        if (index < 120){
            setIndex(self => self+1);
        }
    }
    
  return (
    <div className={centeredContainer}>
        <h2>This is the page to showcase the GFS model.</h2>
        <div className='button-container'>
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
        </div>
        <div>
            <img id='gfs-image' width="70%" src={`http://mag.ncep.noaa.gov/data/gfs/12/namer/sim_radar_comp/gfs_namer_${indexToString(index)}_sim_radar_comp.gif`}/>
        </div>
    </div>
  );
};

export default GFS;