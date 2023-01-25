import { SET_WORDS_ERROR, SET_WORDS_PENDING, SET_WORDS_SUCCESS } from './wordsActionTypes';

const initialState = {
  words: [],
  error: null,
  isLoading: false,
};

export const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORDS_PENDING:
      return {
        ...state,
        error: null,
        isLoading: true,
      }
    case SET_WORDS_SUCCESS:
      return {
        ...state,
        words: action.payload,
        error: null,
        isLoading: false,
      }
    case SET_WORDS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
