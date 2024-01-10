/** @format */

import { NavLink } from 'react-router-dom';
import { NotFound } from './NotFound';
import { objT, propMainContent } from './models';
import { useAppSelector } from './hooks';
import { useGetListFilmQuery } from './redux/reducers/fetch-reducer';
import { PreLoader } from './PreLoader';

export function MainContent({ propArr, mainContentClbk }: propMainContent) {
  const { queryString } = useAppSelector((state) => state.submit);
  const {
    data = {
      Search: [],
      totalResults: '',
      Response: '',
    },
    isLoading,
  } = useGetListFilmQuery(queryString);
  console.log(data);
  // const { Search } = propArr;
  return (
    <>
      {data.Response === 'False' ? (
        <NotFound />
      ) : (
        <ul className='list__container'>
          {!isLoading ? (
            data.Search.map((el: objT) => {
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
            })
          ) : (
            <PreLoader />
          )}
        </ul>
      )}
    </>
  );
}
