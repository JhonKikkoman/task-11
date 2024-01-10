/** @format */

import { propFilmDetailsT } from './models';
import { GobackBtn } from './reusedComponents/Goback';
import { PreLoader } from './PreLoader';
import { useAppSelector } from './hooks';
import { useGetDetailsFilmQuery } from './redux/reducers/fetch-reducer';

export function FilmDetails({
  propObj,
  propClbk,
  propStatus,
}: propFilmDetailsT) {
  const { id } = useAppSelector((state) => state.click);
  const { data, isLoading } = useGetDetailsFilmQuery(id);

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
              onClick={() => propClbk()}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      )}
    </>
  );
}
