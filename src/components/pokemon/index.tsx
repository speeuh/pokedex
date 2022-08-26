import styles from './Pokemon.module.scss';

interface IPokemon {
  pokemon: Record<any, any>;
}

export default function Pokemon({ pokemon }: IPokemon) {


    console.log(pokemon);

  return (
    <>
      <div className={styles.card_container}>{pokemon.name}</div>
    </>
  );
}
