import {
  typesImage,
  typesAudio,
  typesVideo,
} from './constants';

export const identifyFile = (fileStorage, filePath) => {
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
