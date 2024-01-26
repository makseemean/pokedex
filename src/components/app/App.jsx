import { useState } from "react";

import Header from "../header/Header";
import PokemonList from "../pokemonList/PokemonList";
import PokemonInfo from "../pokemonInfo/PokemonInfo";

function App() {
   const [pokemon, setPokemon] = useState(null);

   const onPokemonData = (data) => {
      setPokemon(data);
   }

   return (
      <div className="App">
         <Header />
         <div className="pokemon">
            <div className="pokemon__inner">
               <PokemonList onPokemonData={onPokemonData} />
               <PokemonInfo pokemon={pokemon} />
            </div>
         </div>
      </div>
   );
}

export default App;
