/** @format */

import { createSlice } from '@reduxjs/toolkit'; //  createSlice - для создания среза хранилища

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

export const { setInputSearch } = inputSlice.actions; // дастаём actions , автоматически генерируется по имени свойства в reducers:{}
export default inputSlice.reducer; // переименовываем редуктор именно его нужно импортировать в store
