import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga/saga';
import { callsReduser } from '../store/reduserCalls';
import { searchReduser } from './reduserSearch';
import { filterReduser } from './reducerFilter';
import { employersReducer } from './reducerEmployers';
import { preloaderReducer } from './preloaderReducer';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore ({
  reducer: {
    callsReduser,
    searchReduser,
    filterReduser,
    employersReducer,
    preloaderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});



sagaMiddleware.run(rootWatcher);