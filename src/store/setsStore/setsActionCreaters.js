import { SET_SETS, SET_SETS_ASYNC } from './setsActionTypes';

export const actionSetSets = (sets) => ({
  type: SET_SETS,
  payload: sets,
});

// -------------------------------------------------------------------------------------
// Только для работы саги --> НЕ использовать в редюсере !!!
// -------------------------------------------------------------------------------------
export const actionSetSetsAsync = () => ({
  type: SET_SETS_ASYNC,
});
