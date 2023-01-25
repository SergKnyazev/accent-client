import {axiosInstance, mixArrayElements, removeFirstElem, removeFirstElemToLastElemArray} from '../../utils/utils';
import {put, takeEvery, select, call} from 'redux-saga/effects';
import {SET_IS_TRUE_WORD_ASYNC, SET_WORDS_ASYNC} from '../wordsStore/wordsActionTypes';
import {actionSetWordsError, actionSetWordsPending, actionSetWordsSuccess} from '../wordsStore/wordsActionCreaters';

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* asyncSetWordsWorker(args) {
  console.log(`-------------------------------  asyncSetWordsWorker started...`);
  console.log('args.payload:::');
  console.log(args.payload);

  try {
    yield put(actionSetWordsPending());

    const response = yield call(
      axiosInstance.get,
      '/words',
    );

    console.log('response.data.words :::');
    console.log(response.data.words);

    let { words } = response.data;

    yield put(actionSetWordsSuccess(mixArrayElements(words)));

  } catch (error) {
    console.log('asyncSetWordsWorker -- catch -- ERROR :::');
    console.log(error);
    yield put(actionSetWordsError(error));

  }
}

export function* asyncIsTrueWordWorker(args) {
  console.log(`asyncIsTrueWordWorker started..................................................`);
  console.log('args.payload.............................................');
  console.log(args.payload);

  const { word, id } = args.payload;

  const words = yield select(state => state.wordsState.words);

  console.log('words ::::');
  console.log(words);
  console.log(`asyncIsTrueWordWorker --> word = ${word} --> id = ${id}`);

  try {
    yield put(actionSetWordsPending());

    const responseTrueOrFalse = yield call(
      axiosInstance.post,
      '/words/word',
      {
        words_id: id,
        selectedWord: word
      }
    );

    console.log(`responseTrueOrFalse.data ++++++++++++++++++++++++++++++++`);
    console.log(responseTrueOrFalse.data);

    if (words.length) {
      if (responseTrueOrFalse.data) {
        yield put(actionSetWordsSuccess(removeFirstElem([...words])))
      } else {
        yield put(actionSetWordsSuccess(removeFirstElemToLastElemArray([...words])))
      }
    }
  } catch (error) {
    console.log('asyncIsTrueWordWorker -- catch -- ERROR ---------------------');
    console.log(error);
    yield put(actionSetWordsError(error));
  }
}

export function* wordsWatcher() {
  yield takeEvery(SET_WORDS_ASYNC, asyncSetWordsWorker);
  yield takeEvery(SET_IS_TRUE_WORD_ASYNC, asyncIsTrueWordWorker);
}
