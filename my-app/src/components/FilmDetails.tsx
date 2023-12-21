/** @format */

import { propFilmDetailsT } from './models';
import { GobackBtn } from './reusedComponents/Goback';

export function FilmDetails({ propObj, propClbk }: propFilmDetailsT) {
  return (
    <>
      <div className='details__container'>
        <img
          src={propObj?.Poster}
          alt={propObj?.Title}
          className='item__poster'
        />
        <div className='info__container'>
          <GobackBtn custom='go-back_btn' />
          <h2 className='item__info'>{propObj?.Title}</h2>
          <p className='item__info'>{propObj?.Year}</p>
          <p className='item__info'>{propObj?.Genre}</p>
          <p className='item__info'>{propObj?.Runtime}</p>
          <p className='item__info'>{propObj?.Director}</p>
          <p className='item__info'>{propObj?.imdbRating}</p>
          <button
            type='submit'
            className='nav__element favorite__btn list__btn'
            onClick={() => propClbk()}
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </>
  );
}
