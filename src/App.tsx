import "css-wipe";
import jsonData from "./data/pokemon-gen1.json";
import type { Pokemon } from "./types";

import pokemonLogo from "./img/pokemon-logo.png";

const data = jsonData as Pokemon[];

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <img alt="Pokémon Logo" className="logo" src={pokemonLogo} />
      </nav>
      <main className="content">
        <p>Your content here!</p>
        <div className="list-container">Pokemon here!</div>
      </main>
    </div>
  );
}

export default App;
