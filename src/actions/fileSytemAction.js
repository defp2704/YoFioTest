import FileSystem from 'react-native-fs';
import { PermissionsAndroid } from 'react-native';
import { ADDFILES, CHECKPERMISSIONS } from './actionsTypes';
import { identifyFile } from '../utils'
import { androidPermissions } from '../utils/constants';


export const checkPermissions = (payload) => ({
  type: CHECKPERMISSIONS,
  payload,
});

export const permission = () => async (dispatch) => {
  try {
   const granted = await PermissionsAndroid.requestMultiple(androidPermissions)

   if(granted) {
    dispatch(checkPermissions(true));  
   } else {
    dispatch(checkPermissions(false));
   }
  } catch (error) {
    dispatch(checkPermissions(false));
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
    try {
      const itemsClassified = classifyItems(itemsReaded, pathToScan, files);
      await Promise.all(itemsClassified);  
    } catch (error) {
      console.log('==>err', error);
    }
    
    return files;
  });
};

export const loadFiles = () => async (dispatch) => {
  try {
    readPath(FileSystem.ExternalStorageDirectoryPath).then((rawFiles) => {
      dispatch(addFiles(rawFiles))
    }).catch(error => {
      console.log('==>err', error);  
    }); 
  } catch (error) {
    console.log('==>err', error);
  }
};