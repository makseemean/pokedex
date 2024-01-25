import Skeleton from '../skeleton/Skeleton';

import './pokemonInfo.scss';

const PokemonInfo = ({ pokemon }) => {
   let name = '', id = '';
   if (pokemon) {
      id = pokemon.id > 100 ? "#" + pokemon.id :
         pokemon.id > 10 ? "#0" + pokemon.id :
            "#00" + pokemon.id;
      name = `${pokemon.name} ${id}`
   }

   return (
      <div className='pokemon__info pokemon-info'>
         {pokemon ?
            <>
               <div className="pokemon__info-top">
                  <img className="pokemon-info__img" src={pokemon.art} alt={pokemon.name} />
                  <h2 className="pokemon-info__name">
                     {name}
                  </h2>
               </div>
               <div className="pokemon-info__stats">
                  {pokemon.stats &&
                     pokemon.stats.map((item, index) => (
                        <div key={index} className='pokemon-info__stat'>
                           <span className='pokemon-info__stat-name' >{item.stat.name}</span>
                           <span className='pokemon-info__stat-value' >{item.base_stat}</span>
                        </div>
                     ))
                  }
               </div>
            </>
            :
            <Skeleton />
         }
      </div>
   );
};

export default PokemonInfo;