/** @format */

import { useNavigate } from 'react-router-dom';
import { NotFound } from './NotFound';
import { objT, propMainContent } from './models';
import { useAppSelector } from './hooks';
import { useGetListFilmQuery } from './redux/reducers/fetch-reducer';
import { PreLoader } from './PreLoader';

export function MainContent({ propArr, mainContentClbk }: propMainContent) {
  const navigate = useNavigate();
  const { queryString } = useAppSelector((state) => state.submit);
  const {
    data = {
      Search: [],
      totalResults: '',
      Response: '',
    },
    isLoading,
  } = useGetListFilmQuery(queryString);

  if (data.Response === 'False') {
    return <NotFound />;
  }

  return (
    <>
      <ul className='list__container'>
        {!isLoading ? (
          data.Search.map((el: objT) => {
            return (
              <li
                className='list__item'
                key={el.imdbID}
                onClick={() => navigate('/details', { state: el.imdbID })}
              >
                {el.Title}
              </li>
            );
          })
        ) : (
          <PreLoader />
        )}
      </ul>
    </>
  );
}
