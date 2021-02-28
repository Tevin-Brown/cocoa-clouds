import React, {useEffect, useRef, useState} from 'react';
import {css} from 'emotion';
import { useService } from '../../services/serviceHook';
import {RouteComponentProps, withRouter } from 'react-router-dom';
import { routes } from '../../router/routes';

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

const satelliteLinkContainer = css`
  display: flex;
`;

const satelliteLink = css`
  margin:8px;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

const satelliteLinkActive = css`
  margin:8px;
  color:blue;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

const button = css`
  margin: 8px;
`

export const routeMap:SatelliteDirectories = {
  color_IR: 'Infared',
  color_WV: 'Water Vapor',
};

export interface SatelliteDirectories {
  color_IR: string;
  color_WV: string;
}

const Satellites = ({location, history}:RouteComponentProps) => {
  const {satelliteService} = useService()
  const [images, setImages] = useState<string[]>()
  const [imageIndex, setImageIndex] = useState<number>(0)
  const img = useRef<HTMLImageElement>(null)
  const directory = location.hash.slice(1)

  const click = (key: keyof SatelliteDirectories) => {
    var route = `${routes.satellites}#${key}`
    history.push(route)
  }

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
    if (Object.keys(routeMap).includes(directory)){
      satelliteService.getDirectoryFiles(directory as keyof SatelliteDirectories).then(res => {
        setImages(res.data.data);
        setImageIndex(0);
      })
    }
  }, [location]);

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
  },[imageIndex,images])
  
  return (
    <div className={satelliteContainer}>
      <div className={satelliteLinkContainer}>
        {Object.entries(routeMap).map(([key,value]) =>
          <div className={directory===key ? satelliteLinkActive : satelliteLink} onClick={()=>click(key as keyof SatelliteDirectories)}>
            {value}
          </div>
        )}
      </div>
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

export default withRouter(Satellites);
