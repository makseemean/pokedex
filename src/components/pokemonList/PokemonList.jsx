import { useState, useEffect } from 'react';
import pokemonService from '../../service/service';

import PokemonItem from '../pokemonItem/PokemonItem';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './pokemonList.scss';

const PokemonList = ({ onPokemonData }) => {
   const [pokemonUrls, setPokemonUrls] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [offset, setOffset] = useState(0);
   const [endOfList, setEndOfList] = useState(false);
   const [activePokemon, setActivePokemon] = useState(null);

   const service = pokemonService();

   useEffect(() => {
      if (!endOfList) {
         setError(false);
         setLoading(true);
         service.getPokemonsList(offset)
            .then(data => onPokemonUrlsLoaded(data))
            .catch(onError);
      }
   }, [endOfList, offset]);

   const onPokemonUrlsLoaded = (urls) => {
      setPokemonUrls([...pokemonUrls, ...urls]);
      setLoading(false);

      if (urls.length < 12) {
         setEndOfList(true);
      }
   }

   const updatePokemonUrls = () => {
      if (!loading && !endOfList) {
         setOffset(offset + 12);
      }
   }

   const onError = () => {
      setError(true);
      setLoading(false);
   }

   const handleGetData = (pokemonData) => {
      onPokemonData(pokemonData);
      setActivePokemon(pokemonData.id);
   }

   return (
      <div className='pokemon__items'>
         {!error
            ?
            <ul className={`pokemon__list`}>
               {pokemonUrls.map((url, id) => (
                  <PokemonItem
                     key={id + 1}
                     handleGetData={handleGetData}
                     isActive={activePokemon}
                     onError={onError}
                     {...url}
                  />
               ))}
            </ul>
            :
            <ErrorMessage />
         }
         {loading && <Spinner />}
         <button
            disabled={loading}
            onClick={updatePokemonUrls}
            className="pokemon__load-btn"
         >
            Load More</button>
      </div>
   );
};

export default PokemonList;