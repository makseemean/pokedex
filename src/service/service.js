const pokemonService = () => {
   const _baseApi = 'https://pokeapi.co/api/v2';
   const _limit = 12;

   const getPokemonsList = async (offset = 0) => {
      const res = await fetch(`${_baseApi}/pokemon/?limit=${_limit}&offset=${offset}`);

      if (!res.ok) {
         throw new Error(`Could not fetch ${res}, status: ${res.status}`);
      }

      const data = await res.json();

      return data.results;
   }

   const getPokemonData = async (url) => {
      const res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      const data = await res.json();

      return transformData(data);
   }

   const transformData = (pokemon) => {
      return {
         id: pokemon.id,
         name: pokemon.name,
         img: pokemon.sprites.front_default,
         types: pokemon.types.map(item => item.type.name),
         stats: [
            ...pokemon.stats,
            { base_stat: pokemon.moves.length, stat: { name: 'Total-Moves', url: '' } },
            { base_stat: pokemon.weight, stat: { name: 'Weight', url: '' } }
         ]
      }
   }

   return {
      getPokemonsList,
      getPokemonData
   };
}

export default pokemonService;