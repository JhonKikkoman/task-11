/** @format */

// import { useEffect, useState } from 'react';
// import { objT, stateDetailsT, stateT } from '../models';

// export type fechStateT = {
//   loading: boolean;
//   data?: stateT ;
//   error?: string;
// };
export async function fech(apikey: string, token: string, str: string) {
  const response = await fetch(
    `https://www.omdbapi.com?apikey=${apikey}&${token}=${str.toLowerCase()}`
  );
  if (!response.ok) {
    throw new Error(`Error - ${response.statusText}`);
  }
  const result = await response.json();
  return { result: result, isLoading: response.ok };
}

// export const useFetch = () => {
//   const [status, setStatus] = useState<fechStateT>({
//     loading: false,
//     data: undefined,
//     error: undefined,
//   });

//   async function fech(apikey: string, token: string, str: string) {
//     const url = `https://www.omdbapi.com?apikey=${apikey}&${token}=${str.toLowerCase()}`;
//     setStatus({ loading: true });
//     const response = await fetch(url);
//     if (response.ok) {
//       const result = await response.json();
//       setStatus({ loading: false, data: result });
//     }
//     if (!response.ok) {
//       setStatus({ loading: false, error: response.statusText });
//     }
//   }
//   return { ...status, fech };
// };
