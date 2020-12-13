import { PermissionsAndroid, Platform } from 'react-native';

const typesImage = Object.freeze({
  JPG: 'jpg',
  JPEG: 'jpeg',
  PNG: 'png',
  GIF: 'gif',
});

const typesVideo = Object.freeze({
  MP4: 'mp4',
  '3GP': '3gp',
  WEBM: 'webm',
  MKV: 'mkv'
});

const typesAudio = Object.freeze({
  MP3: 'mp3',
  '3GP': '3gp',
  AAC: 'aac',
  M4A: 'm4a',
  WAV: 'wav',
  WMA: 'wma',
});

const androidPermissions = [
  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
];

export {
  typesImage,
  typesVideo,
  typesAudio,
  androidPermissions,
}