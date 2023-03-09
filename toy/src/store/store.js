import { rootReducer } from './@root';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';
const { createStore, applyMiddleware } = require('redux');

export const store = createStore(
  // 루트 리듀서
  rootReducer,
  // 미들웨어
  process.env.NODE_ENV === 'development' && composeWithDevTools(applyMiddleware(logger))
);
