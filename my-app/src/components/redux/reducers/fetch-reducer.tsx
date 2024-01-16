/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../../api/apiKyes';
import { stateDetailsT, stateT } from '../../models';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.omdbapi.com`,
  }),
  endpoints: (builder) => ({
    getListFilm: builder.query<stateT, string>({
      query: (str: string) =>
        str === '' ? '' : `?apikey=${API_KEY}&s=${str.toLowerCase()}`,
    }),
    getDetailsFilm: builder.query<stateDetailsT, string>({
      query: (str: string) => `?apikey=${API_KEY}&i=${str.toLowerCase()}`,
    }),
  }),
});

export const { getDetailsFilm } = filmApi.endpoints;
export const { useGetListFilmQuery } = filmApi;
export const { useGetDetailsFilmQuery } = filmApi;
export const { useLazyGetListFilmQuery } = filmApi;
export const { useLazyGetDetailsFilmQuery } = filmApi;
