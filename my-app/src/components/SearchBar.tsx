/** @format */

import { useState } from 'react';
import { propT, targetT } from './models';
import { NavLink, useNavigate } from 'react-router-dom';

export function SearchBar({ propFunc }: propT) {
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    propFunc(state);
    setState('');
    navigate('/', { replace: true });
  };

  const handlerChange = ({ target }: targetT) => {
    const { value } = target;
    setState(value);
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
          value={state}
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
