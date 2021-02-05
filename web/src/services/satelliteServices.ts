import axios from 'axios';
import Satellites, {SatelliteDirectories} from '../pages/Satallites';

// const endpoint = process.env.REACT_APP_FLASK_ENDPOINT;
const endpoint = 'http://localhost:5000/';

export const getAllSatelliteDirectories = async (callback: any) => {
  let allDirectories: string[] = [];
  await getSattelliteDirectories().then(
    response => (allDirectories = response.data.data)
  );
  await getSpecificFilesPerDirectory(allDirectories).then(response => {
    console.log('directory files:', response);
    callback(response);
  });
};

export const getSattelliteDirectories = () =>
  axios.get(endpoint + 'satellites/list/all');

export const getDirectoryFiles = (directory: string) =>
  axios.get(endpoint + 'satellites/list/' + directory);

const isNotDirectory = (directory: string) => !/^[^\.]*$/.test(directory);

const getSpecificFilesPerDirectory = async (directoriesList: string[]) => {
  console.log('getting specific files');
  let filesPerDirectory = {} as SatelliteDirectories;
  for (const directory of directoriesList) {
    console.log(directory);
    let files;
    if (isNotDirectory(directory)) {
      continue;
    }

    await getDirectoryFiles(directory).then(
      response => (files = response.data.data)
    );
    filesPerDirectory = {...filesPerDirectory, [directory]: files};
  }
  console.log(filesPerDirectory);
  return filesPerDirectory;
};
