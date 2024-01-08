/** @format */

import { NavLink } from 'react-router-dom';
import { NotFound } from './NotFound';
import { objT, propMainContent } from './models';
import { useAppSelector } from './hooks';
import { useGetListFilmQuery } from './reducers/fetch-reducer';

export function MainContent({ propArr, mainContentClbk }: propMainContent) {
  const { queryString } = useAppSelector((state) => state.input);
  const { data } = useGetListFilmQuery(queryString);
  console.log(data);
  const { Search } = propArr;
  return (
    <>
      {propArr.Response === 'False' ? (
        <NotFound />
      ) : (
        <ul className='list__container'>
          {Search.map((el: objT) => {
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
