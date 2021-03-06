// core
import { put } from 'redux-saga/effects';

// types
import types from '../../../../pages/Chat/store/types';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default function* fetchLogin(action) {
   try {
      // const user = yield call(Api.fetchUser, action.payload.userId);

      yield delay(2000);

      yield put({type: types.CHAT_LOGIN_SUCCESS, user: {
        name: 'Geri'
      }});
   } catch (e) {
      yield put({type: types.CHAT_LOGIN_FAIL, message: {
        text: 'error happened'
      }});
   }
}
