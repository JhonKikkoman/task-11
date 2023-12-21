/** @format */

import { NavLink } from 'react-router-dom';

export type gobackT = {
  custom: string;
};

export function GobackBtn({ custom }: gobackT) {
  const customClass = `nav__element favorite__btn ${custom}`;
  return (
    <>
      <NavLink to='/' className={customClass}>
        Go back
      </NavLink>
    </>
  );
}
