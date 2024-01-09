/** @format */

import { useState } from 'react';
import { propT, targetT } from './models';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { setInputSearch } from './redux/reducers/input-reducer';
import { setQueryString } from './redux/reducers/submit-reducer';

export function SearchBar({ propFunc }: propT) {
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { inputValue } = useAppSelector((state) => state.input);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    propFunc(state);
    dispatch(setQueryString(inputValue));
    dispatch(setInputSearch(''));
    setState('');
    navigate('/', { replace: true });
  };

  const handlerChange = ({ target }: targetT) => {
    const { value } = target;
    // setState(value);
    dispatch(setInputSearch(value));
  };
  return (
    <form className='nav__container' onSubmit={handlerSubmit}>
      <div className='search__container'>
        <label htmlFor='search' className='nav__hint'>
          Search by:
        </label>
        <input
          type='text'
          name='search'
          value={inputValue}
          onChange={handlerChange}
          id='search'
          className='nav__element input__field'
        />
        <button type='submit' className='nav__element search__btn'>
          <span className='material-symbols-outlined'>search</span>
        </button>
      </div>
      <NavLink to='/favorite' className='nav__element favorite__btn'>
        Favorites
      </NavLink>
    </form>
  );
}
