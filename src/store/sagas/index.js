import { all } from 'redux-saga/effects';
import { wordsWatcher } from './wordsSagas';
import { setsWatcher } from './setsSagas';

export function* rootSaga() {
  yield all([
    wordsWatcher(),
    setsWatcher(),
  ]);
}
