import styles from './Pokemon.module.scss';

interface IPokemon {
  pokemon: Record<any, any>;
}

export default function Pokemon({ pokemon }: IPokemon) {

  return (
    <>
      <div className={styles.hover_behavior}>
        <div className={styles.pokemon_number}>#{pokemon.id}</div>
        <div className={styles.card_container}>
          <img
            className={styles.card__image}
            src={pokemon.sprites.versions['generation-v']["black-white"].animated.front_default}
            alt={pokemon.name}
          />
          <div className={styles.card}>
            <div className={styles.card__title}>{pokemon.name}</div>
            <div className={styles.card__types_container}>
              {pokemon.types.map((_: any, index: number) => {
                return (
                  <div className={styles.card_types} key={index}>
                    {_.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
