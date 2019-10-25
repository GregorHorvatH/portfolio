// core
import { all, fork } from 'redux-saga/effects';

// watchers
import fetchLoginWatcher from './watchers/fetchLoginWatcher';

export default function* saga() {
  yield all([
    fork(fetchLoginWatcher),
  ])
}
