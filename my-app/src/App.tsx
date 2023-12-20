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

  const inputSearchClbk = async (str: string) => {
    const data = await fech(API_KEY, 's', str);
    setState(data);
  };

  const linkClickClbk = async (str: string) => {
    const data = await fech(API_KEY, 'i', str);
    setStateDetails(data);
  };

  return (
    <div className='container'>
      <SearchBar propFunc={inputSearchClbk} />
      <div className='main__container'>
        <Routes>
          <Route
            path='/'
            element={<MainContent propArr={state} propClbk={linkClickClbk} />}
          />
          <Route path='/favorite' element={<FavoritePage />} />
          <Route
            path='/details'
            element={
              <FilmDetails
                propObj={stateDetails === null ? null : stateDetails}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
