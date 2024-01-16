/** @format */

import { propFilmDetailsT } from './models';
import { GobackBtn } from './reusedComponents/Goback';
import { PreLoader } from './PreLoader';
import { useGetDetailsFilmQuery } from './redux/reducers/fetch-reducer';
import { useDispatch } from 'react-redux';
import { setFavorites } from './redux/reducers/favPage-reducer';
import { useLocation } from 'react-router-dom';

export function FilmDetails({
  propObj,
  propClbk,
  propStatus,
}: propFilmDetailsT) {
  const location = useLocation();
  const { data, isLoading } = useGetDetailsFilmQuery(location.state);
  const dispatch = useDispatch();

  return (
    <>
      {isLoading && <PreLoader />}
      {!isLoading && (
        <div className='details__container'>
          <img src={data?.Poster} alt={data?.Title} className='item__poster' />
          <div className='info__container'>
            <GobackBtn custom='go-back_btn' />
            <h2 className='item__info'>{data?.Title}</h2>
            <p className='item__info'>{data?.Year}</p>
            <p className='item__info'>{data?.Genre}</p>
            <p className='item__info'>{data?.Runtime}</p>
            <p className='item__info'>{data?.Director}</p>
            <p className='item__info'>{data?.imdbRating}</p>
            <button
              type='submit'
              className='nav__element favorite__btn list__btn'
              onClick={() => dispatch(setFavorites(data))}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      )}
    </>
  );
}
