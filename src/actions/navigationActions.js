import {
  ONCHANGETABS,
  GOTO,
} from './actionsTypes';

export const onChangesTab = (payload) => ({
  type: ONCHANGETABS,
  payload,
});

export const goTo = (payload) => ({
  type: GOTO,
  payload,
});
