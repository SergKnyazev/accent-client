import {
  SET_WORDS_PENDING, SET_WORDS_SUCCESS, SET_WORDS_ERROR, SET_WORDS_ASYNC,
  SET_IS_TRUE_WORD, SET_IS_TRUE_WORD_ASYNC,
} from './wordsActionTypes';

export const actionSetWordsPending = () => ({
  type: SET_WORDS_PENDING,
});

export const actionSetWordsSuccess = (words) => ({
  type: SET_WORDS_SUCCESS,
  payload: words,
});

export const actionSetWordsError = (error) => ({
  type: SET_WORDS_ERROR,
  payload: error,
});




// export const actionSetIsTrueWord = (isTrueOrFalse) => ({
//   type: SET_IS_TRUE_WORD,
//   payload: isTrueOrFalse,
// });

// -------------------------------------------------------------------------------------
// Только для работы саги --> НЕ использовать в редюсере !!!
// -------------------------------------------------------------------------------------

export const actionSetWordsAsync = () => ({
  type: SET_WORDS_ASYNC,
});

export const actionSetIsTrueWordAsync = (word, id) => ({
  type: SET_IS_TRUE_WORD_ASYNC,
  payload: {
    word,
    id,
  }
});
