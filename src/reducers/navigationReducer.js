import {
  ONCHANGETABS,
} from '../actions/actionsTypes';

const initialState = {
  goBackPress: false,
  screen: '',
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONCHANGETABS:
      return {
        ...state,
        goBackPress: action.payload.goBack,
        screen: action.payload.screen,
      };

    default:
      return state;
  }
};

export default navigationReducer;
