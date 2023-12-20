/** @format */

import { NavLink } from 'react-router-dom';
import { stateDetailsT } from './models';

export function FilmDetails({ propObj }: { propObj: stateDetailsT | null }) {
  return (
    <>
      <div className='details__container'>
        <img
          src={propObj?.Poster}
          alt={propObj?.Title}
          className='item__poster'
        />
        <div className='info__container'>
          <NavLink to='/' className='nav__element favorite__btn go-back_btn'>
            Go back
          </NavLink>
          <h2 className='item__info'>{propObj?.Title}</h2>
          <p className='item__info'>{propObj?.Year}</p>
          <p className='item__info'>{propObj?.Genre}</p>
          <p className='item__info'>{propObj?.Runtime}</p>
          <p className='item__info'>{propObj?.Director}</p>
          <p className='item__info'>{propObj?.imdbRating}</p>
          <button
            type='submit'
            className='nav__element favorite__btn list__btn'
            onClick={() => console.log('click')}
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </>
  );
}
