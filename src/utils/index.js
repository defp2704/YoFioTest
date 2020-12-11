import FileSystem from 'react-native-fs';

import {
  typesImage,
  typesAudio,
  typesVideo,
} from './constants';

const convertToBase64 = async (path) => FileSystem.readFile(path, 'base64');

const identifyFile = async (fileStorage, filePath) => {
  const extensionFile = filePath.split('.').pop().toUpperCase();

  if (typesImage[extensionFile]) {
    fileStorage.images.push(filePath);
  } else if (typesVideo[extensionFile]) {
    fileStorage.videos.push(filePath);
  } else if (typesAudio[extensionFile]) {
    fileStorage.audios.push(filePath);
  } else {
    fileStorage.others.push(filePath);
  }
};



export {
  convertToBase64,
  identifyFile,
}