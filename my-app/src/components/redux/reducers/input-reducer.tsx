/** @format */

import { createSlice } from '@reduxjs/toolkit';

export type inputSliceT = {
  inputValue: string;
};

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputValue: '',
  },
  reducers: {
    setInputSearch: (state: inputSliceT, actions) => {
      state.inputValue = actions.payload;
    },
  },
});

export const { setInputSearch } = inputSlice.actions;
export default inputSlice.reducer;
