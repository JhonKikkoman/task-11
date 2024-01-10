/** @format */

import { createSlice } from '@reduxjs/toolkit'; //  createSlice - для создания среза хранилища

export type clickSliceT = {
  id: string;
};

export const clickSlice = createSlice({
  name: 'click',
  initialState: {
    id: '',
  },
  reducers: {
    setClickId: (state: clickSliceT, actions) => {
      state.id = actions.payload;
    },
  },
});

export const { setClickId } = clickSlice.actions; // дастаём actions , автоматически генерируется по имени свойства в reducers:{}
export default clickSlice.reducer; // переименовываем редуктор именно его нужно импортировать в store
