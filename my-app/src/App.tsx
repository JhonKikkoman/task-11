/** @format */
import { useState } from 'react';
import './App.css';
import { MainContent } from './components/MainContent';
import { SearchBar } from './components/SearchBar';
import { API_KEY } from './components/api/apiKyes';
import { Routes, Route } from 'react-router-dom';
import { stateDetailsT, stateT } from './components/models';
import { FavoritePage } from './components/FavoritePage';
import { FilmDetails } from './components/FilmDetails';
import { fech } from './components/api/fechApi';

function App() {
  const [state, setState] = useState<stateT>({
    Search: [],
    totalResults: '',
    Response: '',
  });
  const [stateDetails, setStateDetails] = useState<stateDetailsT | null>(null);
  const [stateFavPage, setStateFavPage] = useState<stateDetailsT[]>([]);
  const [status, setStatus] = useState(false);

  const inputSearchClbk = async (str: string) => {
    setStatus(true);
    const data = await fech(API_KEY, 's', str);
    if (data.isLoading) {
      setState(data.result);
      setStatus(false);
    }
  };

  const linkClickClbk = async (str: string) => {
    setStatus(true);
    const data = await fech(API_KEY, 'i', str);
    if (data.isLoading) {
      setStateDetails(data.result);
      setStatus(false);
    }
  };

  const filmDetailClbk = () => {
    let arr = stateFavPage.filter((item) => {
      return item.Title !== stateDetails?.Title;
    });
    if (stateDetails !== null) {
      setStateFavPage([...arr, stateDetails]);
    }
  };

  const filterFavPage = (str: string) => {
    const arr = stateFavPage.filter((e) => e.imdbID !== str);
    setStateFavPage([...arr]);
  };

  return (
    <div className='container'>
      <SearchBar propFunc={inputSearchClbk} />
      <div className='main__container'>
        <Routes>
          <Route
            path='/'
            element={
              <MainContent propArr={state} mainContentClbk={linkClickClbk} />
            }
          />
          <Route
            path='/favorite'
            element={
              <FavoritePage
                propArr={stateFavPage}
                favoritePageClbk={linkClickClbk}
                filterClbk={filterFavPage}
              />
            }
          />
          <Route
            path='/details'
            element={
              <FilmDetails
                propObj={stateDetails === null ? null : stateDetails}
                propClbk={filmDetailClbk}
                propStatus={status}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
