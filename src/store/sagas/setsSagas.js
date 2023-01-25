import { axiosInstance } from '../../utils/utils';
import { put, takeEvery, call } from 'redux-saga/effects';
import { SET_SETS_ASYNC} from '../setsStore/setsActionTypes';
import { actionSetSets } from '../setsStore/setsActionCreaters';

export function* asyncSetSetsWorker(args) {
  console.log(`-------------------------------  asyncSetSetsWorker started...`);
  console.log('args.payload:::');
  console.log(args.payload);

  try {
    const response = yield call(
      axiosInstance.get,
      '/sets',
    );

    console.log('response.data.sets :::');
    console.log(response.data.sets);

    let { sets } = response.data;

    yield put(actionSetSets(sets));

  } catch (error) {
    console.log('asyncSetSetsWorker -- catch -- ERROR :::');
    console.log(error);
  }
}

export function* setsWatcher() {
  yield takeEvery(SET_SETS_ASYNC, asyncSetSetsWorker);
}
