import FileSystem from 'react-native-fs';
import { PermissionsAndroid } from 'react-native';
import { ADDFILES } from './actionsTypes';
import { identifyFile } from '../utils'
import { androidPermissions } from '../utils/constants';

export const permission = () => async (dispatch) => {
  try {
    await PermissionsAndroid.requestMultiple(androidPermissions)
  } catch (error) {
    //
  }
}

export const addFiles = (payload) => ({
  type: ADDFILES,
  payload,
});

const classifyItems = (itemsReaded, pathToScan, files) => itemsReaded.map(async (item) => {
  if (item.isFile()) {
    const filePath = item.path
    identifyFile(files, filePath);
  } else {
    const newDirectoryPath = `${pathToScan}/${item.name}`;
    await readPath(newDirectoryPath, files);
  }
});

const readPath = async (pathToScan, files = { images: [], videos: [], audios: [], others: [] }) => {
  return FileSystem.readDir(pathToScan).then(async (itemsReaded) => {
    const itemsClassified = classifyItems(itemsReaded, pathToScan, files);
    await Promise.all(itemsClassified);
    return files;
  });
};

export const loadFiles = () => async (dispatch) => {
  readPath(FileSystem.ExternalStorageDirectoryPath).then((rawFiles) => {
    dispatch(addFiles(rawFiles))
  });
};