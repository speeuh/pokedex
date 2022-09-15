import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Pokedex from "./components/pokedex/Pokedex";

import styles from "./Routes.module.scss";
import background from "./assets/pokemon_background.jpg";
import PokemonFavorites from "./components/pokemon/favorites/PokemonFavorites";

import { useEffect, useState } from "react";
import { fetchPokemonData, getPokemonById, loadPokemons } from "./api";
import PokemonDetails from "./components/pokemon/details/PokemonDetails";

let PageSize = 21;

export default function AppRouter() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);
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
      console.log("Error when fetch data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [currentPage]);

  const onSearchHandler = async (pokemon: any) => {
    try {
      setLoading(true);
      setNotFound(false);
      if (pokemon !== "") {
        const result = await getPokemonById(pokemon.toLowerCase());
        if (result !== undefined) {
          setFilteredPokemon(result);
        } else {
          setNotFound(true);
        }
      } else {
        setFilteredPokemon([]);
        fetchPokemons();
      }
    } catch (error) {
      console.log("Error when fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.page} style={{ background: `url(${background})` }}>
        <main>
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Navbar onSearchHandler={onSearchHandler} />}
              >
                <Route
                  index
                  element={
                    <Pokedex
                      pokemons={pokemons}
                      filteredPokemon={filteredPokemon}
                      pageSize={PageSize}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      notFound={notFound}
                    />
                  }
                />
                <Route path="favorites" element={<PokemonFavorites />} />
                <Route path="details/:id" element={<PokemonDetails />} />
              </Route>
            </Routes>
          </Router>
        </main>
      </div>
    </>
  );
}
