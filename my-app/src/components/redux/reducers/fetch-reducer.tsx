/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../../api/apiKyes';
import { stateDetailsT, stateT } from '../../models';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  // baseQuery - базовый URL адресс по которому осуществляется GET запрос, в свойстве baseUrl указан базовый адресс, остальные данные добавятся через '/endpoints(getListFilm.query)
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.omdbapi.com`,
  }),
  // endpoints конечные точки входа api , где свойство query является функцией и получит данные в аргумент при использовании хука
  endpoints: (builder) => ({
    getListFilm: builder.query<stateT, string>({
      query: (str: string) =>
        str === '' ? '' : `?apikey=${API_KEY}&s=${str.toLowerCase()}`,
      // {
      //   let queryString = '';
      //   if (str !== '') {
      //     queryString = `?apikey=${API_KEY}&s=${str.toLowerCase()}`;
      //   }
      //   return queryString;
      // },
    }),
    getDetailsFilm: builder.query<stateDetailsT, string>({
      query: (str: string) => `?apikey=${API_KEY}&i=${str.toLowerCase()}`,
    }),
  }),
});

export const { getDetailsFilm } = filmApi.endpoints;
export const { useGetListFilmQuery } = filmApi; // хук, создаётся по имени свойства в endpoints:{}можно использовать только с /query/react
export const { useGetDetailsFilmQuery } = filmApi;
