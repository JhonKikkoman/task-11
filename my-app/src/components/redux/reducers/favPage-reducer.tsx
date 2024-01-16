/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { stateDetailsT } from '../../models';

export type favPageSliceT = {
  arrFavorites: stateDetailsT[];
};

export const favPagSlice = createSlice({
  name: 'favorites',
  initialState: {
    arrFavorites: [],
  },
  reducers: {
    setFavorites: (state: favPageSliceT, actions) => {
      const arr = state.arrFavorites.filter((item) => {
        return item.Title !== actions.payload.Title;
      });
      arr.push(actions.payload);
      state.arrFavorites = arr;
    },
    filterFavorites: (state: favPageSliceT, actions) => {
      const arr = state.arrFavorites.filter(
        (el) => el.imdbID !== actions.payload
      );
      state.arrFavorites = arr;
    },
  },
});

export const { setFavorites, filterFavorites } = favPagSlice.actions;
export default favPagSlice.reducer;
