import { ADDFILES, CHECKPERMISSIONS } from '../actions/actionsTypes';
import { permission } from '../actions/fileSytemAction';

const initialState = {
  images: [],
  videos: [],
  audios: [],
  others: [],
  isLoading: true,
  permissionsAndroid: false,
}

const fileSystemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDFILES:
      return {
        ...state,
        images: [...action.payload.images],
        videos: action.payload.videos,
        audios: action.payload.audios,
        others: action.payload.others,
        isLoading: false,
      };
    case  CHECKPERMISSIONS:
      return {
        ...state,
        permissionsAndroid: action.payload,
      }
    default:
      return state
  }
};

export default fileSystemReducer;