/** @format */

import { NavLink } from 'react-router-dom';
import { NotFound } from './NotFound';
import { propMainContent } from './models';

export function MainContent({ propArr, mainContentClbk }: propMainContent) {
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
                  onClick={() => mainContentClbk(el.imdbID)}
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
