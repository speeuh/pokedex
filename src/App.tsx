import { useEffect, useState } from 'react';
import { fetchPokemonData, loadPokemons } from './api';
import Navbar from './components/navbar';

import styles from './App.module.scss';
import Pokedex from './components/pokedex';

import background from './assets/pokemon_background.jpg';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await loadPokemons();
      const promises = data.results.map(async (pokemon: any) => {
        return await fetchPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {
      console.log('Error when fetch data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className={styles.page} style={{background: `url(${background})`}}>
          <Navbar />
          <Pokedex pokemons={pokemons} />
        </div>
      )}
    </>
  );
}

export default App;
