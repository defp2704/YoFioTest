import { ADDFILES } from '../actions/actionsTypes';

const initialState = {
  images: [],
  videos: [],
  audios: [],
  others: [],
  isLoading: true,
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
    default:
      return state
  }
};

export default fileSystemReducer;