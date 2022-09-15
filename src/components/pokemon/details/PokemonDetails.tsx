import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonById } from "../../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import ProgressBar from "@ramonak/react-progress-bar";

import styles from "./PokemonDetails.module.scss";

export default function PokemonDetails() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState<Record<any, any>>({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      if (id) {
        const data = await getPokemonById(id);
        setPokemon(data);
      }
    } catch (error) {
      console.log("Error when fetch data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const backOnePage = () => {
    navigate(-1);
  };

  const getProgressBarColor = (status: any) => {
    switch (status) {
      case "hp":
        return "darkred";

      case "attack":
        return "darkorange";

      case "defense":
        return "GoldenRod";

      case "special-attack":
        return "mediumslateblue";

      case "special-defense":
        return "ForestGreen";

      case "speed":
        return "HotPink";

      default:
        return "black";
    }
  };

  function Loading(props: any) {
    if (!loading) {
      return (
        <div className={styles.container}>
          <button
            type="button"
            className={styles.container__button}
            onClick={backOnePage}
          >
            {<FontAwesomeIcon icon={faChevronLeft} />}
          </button>
          <div>
            <div className={styles.name}>{pokemon.name}</div>
            <div className={styles.status_container}>
              <img
                className={styles.status_container__img}
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
              <div>
                {pokemon.stats.map((status: any) => (
                  <>
                    <span className={styles.status_container__name}>
                      {status.stat.name}
                    </span>
                    <ProgressBar
                      className={styles.status_container__status}
                      completed={status.base_stat.toString()}
                      bgColor={getProgressBarColor(status.stat.name)}
                    />
                  </>
                ))}
              </div>
              <div className={styles.abilities_container}>
                {pokemon.abilities.map((_: any, index: number) => (
                  <>
                    <span className={styles.abilities_container__ability}>
                    <span className={styles.abilities_container__ability_number}> Ability #{index + 1} </span>
                      {_.ability.name}
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <h2 className={styles.container}> Loading... </h2>;
  }

  return <Loading loading={loading} />;
}
