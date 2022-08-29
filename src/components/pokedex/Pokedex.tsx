import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import Pokemon from '../pokemon/Pokemon';
import styles from './Pokedex.module.scss';

import { fetchPokemonData, loadPokemons } from '../../api';

let PageSize = 21;

export default function Pokedex() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);
  // const [pokemonLength, setPokemonLength] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await loadPokemons(PageSize, PageSize * (currentPage - 1));
      // setPokemonLength(data.count);
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
  }, [currentPage]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className={styles.container}>
          {pokemons.map((pokemon: any) => (
            <div key={pokemon.id}>
              <Pokemon pokemon={pokemon} />
            </div>
          ))}
          <Pagination
            className={styles.pagination_bar}
            currentPage={currentPage}
            totalCount={609}
            pageSize={PageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      )}
    </>
  );
}
