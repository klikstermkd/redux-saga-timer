import { take, race, call, put } from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* increment() {
  yield call(delay, 1000);
  yield put({type: 'INCREMENT'});
  return true;
};

export default function* watchIncrement() {
  while (true) {
    let cancelTask;
    
    yield take('START');

    while (!cancelTask) {
      const {start, cancel} = yield race({
        start: call(increment),
        cancel: take(['STOP', 'RESET'])
      });

      cancelTask = cancel;
    }
  }
};