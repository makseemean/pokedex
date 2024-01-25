import { useEffect, useState } from 'react';

import pokemonService from '../../service/service';

import Skeleton from '../skeleton/Skeleton';

import './pokemonItem.scss';

const PokemonItem = ({ url, handleGetData, isActive, onError }) => {
   const [pokemonData, setPokemonData] = useState({});
   const [loading, setLoading] = useState(false);

   const service = pokemonService();

   useEffect(() => {
      setLoading(true);
      service.getPokemonData(url)
         .then(onPokemonDataLoaded)
         .catch(onError);
   }, [url]);

   const onPokemonDataLoaded = (data) => {
      setPokemonData(data);
      setLoading(false);
   }

   return (
      <>
         {!loading
            ?
            <li
               onClick={!loading ? () => handleGetData(pokemonData) : null}
               className={`pokemon__item pokemon-item ${isActive === pokemonData.id && 'pokemon-item_active'}`}
            >
               <img className="pokemon-item__img" src={pokemonData.img} alt={pokemonData.name} />
               <h3 className="pokemon-item__name">{pokemonData.name}</h3>
               <div className="pokemon-item__types">
                  {pokemonData.types &&
                     pokemonData.types.map((type, index) => (
                        <span className={`pokemon-item__type ${type}`} key={index}>{type}</span>
                     ))
                  }
               </div>
            </li>
            :
            <Skeleton className="skeleton_card" />
         }
      </>
   );
};

export default PokemonItem;