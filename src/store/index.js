// core
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// reducers
import rootReducer from './rootReducer';

// sagas
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true,
});

const middleware = [
  sagaMiddleware,
];

// add logger only if we are working on development env
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;
