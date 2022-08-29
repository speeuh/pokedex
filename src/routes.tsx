import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Pokedex from './components/pokedex/Pokedex';

import styles from './Routes.module.scss';
import background from './assets/pokemon_background.jpg';

export default function AppRouter() {
  return (
    <>
      <div className={styles.page} style={{ background: `url(${background})` }}>
        <main>
          <Router>
            <Routes>
              <Route path='/' element={<Navbar />}>
                <Route index element={<Pokedex />} />
              </Route>
            </Routes>
          </Router>
        </main>
      </div>
    </>
  );
}
