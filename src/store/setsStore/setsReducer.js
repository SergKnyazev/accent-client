import { SET_SETS } from './setsActionTypes';

const initialState = {
  sets: [],
};

export const setsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETS:
      return {
        ...state,
        sets: action.payload,
      }
    default:
      return state
  }
}
