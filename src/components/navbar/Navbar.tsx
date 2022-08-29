import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <img
          src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
          alt='pokeapi'
        />

        <div className={styles.box}>
          <form name='search'>
            <label>
              <input type='text' className={styles.input} />
            </label>
          </form>
          <i>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
