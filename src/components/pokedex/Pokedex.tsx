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
}

export default function Pokedex({
  pokemons,
  filteredPokemon,
  pageSize,
  currentPage,
  setCurrentPage,
}: IPokedex) {
  return (
    <>
      {Object.keys(filteredPokemon).length !== 0 ? (
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
