import { SET_IS_OVER } from './uiActionTypes';

const initialState = {
  setIsOver: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_IS_OVER:
    //   return {
    //     ...state,
    //     setIsOver: true,
    //   }
    default:
      return state
  }
}
