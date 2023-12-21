/** @format */

// <----------------App_Models--------------------------------->

export type objT = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type stateT = {
  Search: objT[];
  totalResults: string;
  Response: string;
  Error?: string;
};
export type stateDetailsT = {
  Poster: string;
  Title: string;
  Year: string;
  Genre: string;
  Runtime: string;
  Director: string;
  Actors: string;
  imdbRating: string;
  imdbID: string;
};
// <------------SearchBar_Models--------------------->

export type targetT = { target: { value: string; name: string } };

export type propT = {
  propFunc: (str: string) => void;
};

//<------------------MainContent_Models------------------------------>

export type propMainContent = {
  propArr: stateT;
  mainContentClbk: (str: string) => void;
};

// <---------------------FilmDetails_Models--------------------------->

export type propFilmDetailsT = {
  propObj: stateDetailsT | null;
  propClbk: () => void;
};

//<-----------------------FavoritePage_Models------------------------>

export type propFavPageT = {
  propArr: stateDetailsT[];
  favoritePageClbk: (str: string) => void;
  filterClbk: (str: string) => void;
};
