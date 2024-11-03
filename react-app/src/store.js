import { configureStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer'; 
import { configureStore } from '@reduxjs/toolkit';
const sagaMiddleWare = createSagaMiddleware()
const store = configureStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watchFetchUsers)
export default store;