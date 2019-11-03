// types
import types from "./types";

const initialState = {
  authorized: false,
  isLoading: false,
  messages: [],
  user: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CHAT_LOADER_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.CHAT_LOADER_FINISH:
      return {
        ...state,
        isLoading: false,
      };

      case types.CHAT_LOGIN:
      return {
        ...state,
      };
    case types.CHAT_LOGIN_SUCCESS:
      return {
        ...state,
        authorized: true,
        user: payload,
      };
    case types.CHAT_LOGIN_FAIL:
      return {
        ...state,
      };
    case types.CHAT_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
