import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import Pokemon from "../pokemon/Pokemon";
import styles from "./Pokedex.module.scss";
interface IPokedex {
  pokemons: any[];
  filteredPokemon: any[];
  pageSize: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  notFound: boolean;
}

export default function Pokedex({
  pokemons,
  filteredPokemon,
  pageSize,
  currentPage,
  setCurrentPage,
  notFound,
}: IPokedex) {
  return (
    <>
      {notFound === true ? (
        <h2 className={styles.container}>
          Pokemon not found, please enter again!
        </h2>
      ) : Object.keys(filteredPokemon).length !== 0 ? (
        <div className={styles.container}>
          <Pokemon pokemon={filteredPokemon} />
        </div>
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
            pageSize={pageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      )}
    </>
  );
}
