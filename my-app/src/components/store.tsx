/** @format */

import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './reducers/input-reducer';

export const store = configureStore({
  reducer: {
    input: inputReducer, // тут можно будет вытащить этот редуктор через useSelector
  },
});

export type RootState = ReturnType<typeof store.getState>; // типизация хранилища Store
export type AppDispatch = typeof store.dispatch; // типизация функции Dispatch
