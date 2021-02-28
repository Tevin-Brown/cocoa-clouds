import axios from 'axios';
import React, { useMemo } from 'react'
import { useAppState } from '../appContext';
import { SatelliteDirectories } from '../pages/Satallites/Satellites';

export const useService = () => {
    const {config} = useAppState()

    return useMemo(
        () => ({
          satelliteService: {
            getSattelliteDirectories: async () =>
                axios.get(config?.API_BASE_URL + '/satellites/list/all'),
            getDirectoryFiles: async (directory: keyof SatelliteDirectories)  =>
                axios.get(config?.API_BASE_URL + '/satellites/list/' + directory),
            getImage: async (directory:string, filename:string) => 
                axios.get(`${config?.API_BASE_URL}/satellites/${directory}/${filename}`, { responseType:"blob" })
          },
        }),
        [config],
      );
}