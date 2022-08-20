import { useEffect, useState } from 'react';
import { loadPokemons } from './api';
import Navbar from './components/navbar';

import styles from './App.module.scss';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const result = await loadPokemons();
    setPokemons(result);
  };

  useEffect(() => {
    fetchPokemons();
    console.log(pokemons);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
    </div>
  );
}

export default App;
