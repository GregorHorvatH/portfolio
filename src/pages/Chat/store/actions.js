// types
import types from './types';

export default Object.freeze({
  chatLogin: (options) => ({
    type: types.CHAT_LOGIN,
    payload: options
  }),
  chatLoginSuccess: (user) => ({
    type: types.CHAT_LOGIN_SUCCESS,
    payload: user
  }),
  chatLoginFail: (error) => ({
    type: types.CHAT_LOGIN_FAIL,
    payload: error,
    isError: true,
  }),
});
