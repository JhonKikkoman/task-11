/** @format */

import { createSlice } from '@reduxjs/toolkit';

export type submitSliceT = {
  queryString: string;
};

export const submitSlice = createSlice({
  name: 'submit',
  initialState: {
    queryString: '',
  },
  reducers: {
    setQueryString: (state: submitSliceT, actions) => {
      state.queryString = actions.payload;
    },
  },
});

export const { setQueryString } = submitSlice.actions;
export default submitSlice.reducer;
