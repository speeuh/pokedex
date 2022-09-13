import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Searchbar.module.scss';

interface ISearchbar {
  search: any;
}

export default function Searchbar({ search }: ISearchbar) {
  const [searchPokemon, setSearchPokemon] = useState('');

  const onChangeHandler = (event: any) => {
    setSearchPokemon(event.target.value);
  };

  const onButtonClickHandler = (event: any) => {
    event.preventDefault();
    search(searchPokemon);
  };

  return (
    <form name='search'>
      <label>
        <input
          type='text'
          className={styles.search__input}
          placeholder='Search...'
          onChange={onChangeHandler}
        />
        <button
          type='submit'
          className={
            !searchPokemon
              ? styles.search__input_button_disabled
              : styles.search__input_button
          }
          onClick={onButtonClickHandler}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </label>
    </form>
  );
}
