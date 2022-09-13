import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";

import styles from "./Navbar.module.scss";
import Searchbar from "../searchbar/Searchbar";

interface INavbar {
  onSearchHandler: any;
}

export default function Navbar({ onSearchHandler }: INavbar) {
  return (
    <>
      <nav className={styles.container}>
        <NavLink to="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="pokeapi"
          />
        </NavLink>

        <ul className={styles.list}>
          <li className={styles.list__items}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classNames(styles.active) : undefined
              }
            >
              Pokedex
            </NavLink>
          </li>
          <li className={styles.list__items}>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? classNames(styles.active) : undefined
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>

        <Searchbar search={onSearchHandler} />
      </nav>

      <Outlet />
    </>
  );
}
