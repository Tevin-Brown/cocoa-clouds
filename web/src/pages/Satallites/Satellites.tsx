import React, {useEffect, useRef, useState} from 'react';
import {css} from 'emotion';
import { useService } from '../../services/serviceHook';

const satelliteContainer = css`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
`;

const image = css`
  max-width:75%;
  max-height:75%;
`;

const imageContainer = css`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  align-items: center;
`;

const headerText = css`
  font-size: 20px;
  margin: 5px 0px;
`;

const button = css`
  margin: 8px;
`
export interface SatelliteDirectories {
  color_IR: string;
  color_WV: string;
}

const Satellites = ({directory}: {directory: keyof SatelliteDirectories}) => {
  const {satelliteService} = useService()
  const [images, setImages] = useState<string[]>()
  const [imageIndex, setImageIndex] = useState<number>(0)
  const img = useRef<HTMLImageElement>(null)

  const imageClick = (cmd: 'previous' | 'next') => {
    switch (cmd) {
      case 'next':
        if (images && (images?.length > imageIndex)) setImageIndex(imageIndex + 1)
        break;
      case 'previous':
        if (imageIndex>0) setImageIndex(imageIndex - 1)
        break;
    }

  }
  
  useEffect(() => {
      satelliteService.getDirectoryFiles(directory).then(res => {
        setImages(res.data.data);
        setImageIndex(0);
      })
  }, []);

  useEffect(()=>{
    if(images){
      satelliteService.getImage(directory,images[imageIndex]).then(res => {
        var reader = new window.FileReader();
        reader.readAsDataURL(res.data); 
        reader.onload = function() {

            var imageDataUrl = reader.result as string;
            img.current?.setAttribute("src", imageDataUrl);

        }
      })
    }
  },[imageIndex, images])
  
  return (
    <div className={satelliteContainer}>
      <p className={headerText}>Look at these awesome satallite images!</p>
      <div className={imageContainer}>
          <img className={image} ref={img}/>
          <div>
            <button onClick={()=>imageClick('previous')} className={button}>Previous</button>
            <button onClick={ ()=>imageClick('next')} className={button}>Next</button>
          </div>
      </div>
    </div>
  );
};

export default Satellites;
