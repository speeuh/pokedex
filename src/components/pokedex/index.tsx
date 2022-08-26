import Pokemon from '../pokemon';
import styles from './Pokedex.module.scss';

interface IPokedex {
  pokemons: any[];
}

export default function Pokedex({ pokemons }: IPokedex) {
  return (
    <>
      <div className={styles.container}>
        {pokemons.map((pokemon: any) => (
          <div key={pokemon.id}>
            <Pokemon pokemon={pokemon} />
          </div>
        ))}
      </div>
    </>
  );
}
