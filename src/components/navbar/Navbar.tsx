import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Navbar.module.scss';
import Searchbar from '../searchbar/Searchbar';
import { getPokemonById } from '../../api';
import { useState } from 'react';


export default function Navbar() {

  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const onSearchHandler = async (pokemon: any) => {
    try {
      setLoading(true)
      setNotFound(false)
      const result = await getPokemonById(pokemon)
    } catch (error) {
      console.log('Error when fetch data', error);
    } finally {
      setLoading(false)
    }
  }

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

        <Searchbar search={onSearchHandler}/>
      </nav>

      <Outlet />
    </>
  );
}
