import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <>
      <nav className={styles.container}>
        <NavLink to='/'>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
            alt='pokeapi'
          />
        </NavLink>

        <ul className={styles.list}>
          <li className={styles.list__items}>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classNames(styles.active) : undefined
              }
            >
              Pokedex
            </NavLink>
          </li>
          <li className={styles.list__items}>
            <NavLink
              to='/favorites'
              className={({ isActive }) =>
                isActive ? classNames(styles.active) : undefined
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>

        <form name='search'>
          <label>
            <input
              type='text'
              className={styles.search__input}
              placeholder='Search...'
            />
            <button type='submit' className={styles.search__input_button}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </label>
        </form>
      </nav>

      <Outlet />
    </>
  );
}
