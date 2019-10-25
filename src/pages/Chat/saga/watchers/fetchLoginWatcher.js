// core
import { takeEvery } from 'redux-saga/effects';

// workers
import fetchLogin from '../workers/fetchLogin';

// types
import types from '../../../../pages/Chat/store/types';

export default function* fetchLoginWatcher() {
  yield takeEvery(types.CHAT_LOGIN, fetchLogin);
}
