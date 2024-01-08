/** @format */

import { createSlice } from '@reduxjs/toolkit'; //  createSlice - для создания среза хранилища

export type inputSliceT = {
  inputValue: string;
  queryString: string;
};

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    inputValue: '',
    queryString: '',
  },
  reducers: {
    setInputSearch: (state: inputSliceT, actions) => {
      state.inputValue = actions.payload;
    },
    setQueryString: (state: inputSliceT, actions) => {
      state.queryString = actions.payload;
    },
  },
});

export const { setInputSearch } = inputSlice.actions; // дастаём actions , автоматически генерируется по имени свойства в reducers:{}
export const { setQueryString } = inputSlice.actions;
export default inputSlice.reducer; // переименовываем редуктор именно его нужно импортировать в store
