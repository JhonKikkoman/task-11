/** @format */

export async function fech(apikey: string, token: string, str: string) {
  const response = await fetch(
    `https://www.omdbapi.com?apikey=${apikey}&${token}=${str.toLowerCase()}`
  );
  const result = await response.json();
  return result;
}
