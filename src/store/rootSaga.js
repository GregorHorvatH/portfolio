// core
import { all, fork } from 'redux-saga/effects';

// sagas
import chatSaga from '../pages/Chat/saga';

export default function* rootSaga() {
  yield all([
    fork(chatSaga),
  ])
}
