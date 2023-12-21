/** @format */

import { propFavPageT } from './models';
import { NavLink } from 'react-router-dom';
import { GobackBtn } from './reusedComponents/Goback';

export function FavoritePage({
  propArr,
  favoritePageClbk,
  filterClbk,
}: propFavPageT) {
  return (
    <>
      <ul className='list__container'>
        <GobackBtn custom='go-back_btn-modefied' />
        {propArr.map((el) => {
          return (
            <li className='list__item' key={el.imdbID}>
              <NavLink
                to='/details'
                className='item__link'
                onClick={() => favoritePageClbk(el.imdbID)}
              >
                {el.Title}
              </NavLink>
              <button
                type='submit'
                className='nav__element favorite__btn list__btn'
                onClick={() => filterClbk(el.imdbID)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
