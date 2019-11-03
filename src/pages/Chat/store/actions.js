// types
import types from './types';

export default Object.freeze({
  chatLoaderStart: () => ({
    type: types.CHAT_LOADER_START,
  }),
  chatLoaderFinish: () => ({
    type: types.CHAT_LOADER_FINISH,
  }),
  chatLogin: (options) => ({
    type: types.CHAT_LOGIN,
    payload: options,
  }),
  chatLoginSuccess: (user) => ({
    type: types.CHAT_LOGIN_SUCCESS,
    payload: user,
  }),
  chatLoginFail: (error) => ({
    type: types.CHAT_LOGIN_FAIL,
    payload: error,
    isError: true,
  }),
  chatLogOut: () => ({
    type: types.CHAT_LOGOUT,
  }),
});
