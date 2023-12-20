/** @format */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { NotFound } from './NotFound';
import { propMainContent } from './models';
import { NavLink } from 'react-router-dom';

export function MainContent({ propArr, propClbk }: propMainContent) {
  const { Search } = propArr;

  return (
    <>
      {propArr.Response === 'False' ? (
        <NotFound />
      ) : (
        <ul className='list__container'>
          {Search.map((el) => {
            return (
              <li className='list__item' key={el.imdbID}>
                <NavLink
                  to='/details'
                  className='item__link'
                  onClick={() => propClbk(el.imdbID)}
                >
                  {el.Title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
