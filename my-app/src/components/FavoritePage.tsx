/** @format */

import { propFavPageT, stateDetailsT } from './models';
import { useNavigate } from 'react-router-dom';
import { GobackBtn } from './reusedComponents/Goback';
import { useAppSelector } from './hooks';
import { useDispatch } from 'react-redux';
import { filterFavorites } from './redux/reducers/favPage-reducer';

export function FavoritePage({
  propArr,
  favoritePageClbk,
  filterClbk,
}: propFavPageT) {
  const { arrFavorites } = useAppSelector((state) => state.favorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <ul className='list__container'>
        <GobackBtn custom='go-back_btn-modefied' />
        {arrFavorites.map((el: stateDetailsT) => {
          return (
            <li
              className='list__item'
              key={el.imdbID}
              onClick={() => navigate('/favorite', { state: el.imdbID })}
            >
              {el.Title}
              <button
                type='submit'
                className='nav__element favorite__btn list__btn'
                onClick={() => dispatch(filterFavorites(el.imdbID))}
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
