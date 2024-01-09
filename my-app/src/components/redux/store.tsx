/** @format */

import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './reducers/input-reducer';
import { filmApi } from './reducers/fetch-reducer';
import submitReducer from './reducers/submit-reducer';

export const store = configureStore({
  reducer: {
    input: inputReducer, // тут можно будет вытащить этот редуктор через useSelector
    submit: submitReducer,
    [filmApi.reducerPath]: filmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>; // типизация хранилища Store
export type AppDispatch = typeof store.dispatch; // типизация функции Dispatch
