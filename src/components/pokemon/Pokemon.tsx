import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./Pokemon.module.scss";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

interface IPokemon {
  pokemon: Record<any, any>;
}

export default function Pokemon({ pokemon }: IPokemon) {
  return (
    <>
      <div className={styles.hover_behavior}>
        <div className={styles.pokemon_top}>
          #{pokemon.id}
          <Tippy content={<span>Click to see Pokemon Details</span>}>
            <Link to={`/details/${pokemon.id}`}>
              <button type="button" className={styles.pokemon_top__button}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
            </Link>
          </Tippy>
        </div>
        <div className={styles.card_container}>
          <img
            className={styles.card__image}
            src={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            alt={pokemon.name}
          />
          <div className={styles.card}>
            <div className={styles.card__title}>{pokemon.name}</div>
            <div className={styles.card__types_container}>
              {pokemon.types.map((_: any, index: number) => {
                return (
                  <div className={styles.card__types} key={index}>
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
