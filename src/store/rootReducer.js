// core
import { combineReducers } from 'redux';

// reducers
import chat from '../pages/Chat/store/reducer';

const rootReducer = combineReducers({
  chat,
});

export default rootReducer;
