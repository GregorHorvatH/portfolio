// types
import types from "./types";

const initialState = {
  authorized: false,
  isLoading: false,
  messages: [],
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.CHAT_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.CHAT_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.CHAT_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
