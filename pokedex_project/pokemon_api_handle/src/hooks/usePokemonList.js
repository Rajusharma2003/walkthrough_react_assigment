import axios from "axios";
import { useState , useEffect} from "react";

function usePokemonList() {   //(url)3

       // const [pokemonList , setPokemonList ] = useState([])
    // const [isLoading , setIsLoading ] = useState([true])

    // const [pokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    // const [prevUrl , setPrevUrl] = useState('');//2
    // const [nextUrl , setNextUrl] = useState(''); //2

/** if you can not use lot of the useState then you can use the morden ("useSatate").  */
const [userStatesList, setUserStatesList] = useState({
    // pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
    pokedexUrl: 'https://pokeapi.co/api/v2/pokemon', //3
    pokemonList: [],
    isLoading: true,
    prevUrl: '',
    nextUrl: '',
    type : ''
});

async function downloadPokemons() {
   
         // setIsLoading(true)
    setUserStatesList({ ...userStatesList, isLoading: true });

    const res = await axios.get(userStatesList.pokedexUrl);
    const pokemonResult = res.data.results;

    // console.log(res.data.pokemon);  // this is for similar pokemon.
      // setNextUrl(res.data.next); //2
    // setPrevUrl(res.data.previous); //2
    setUserStatesList( (states) => ({
        ...states,
        prevUrl: res.data.previous,
        nextUrl: res.data.next
    }));


    const pokemonResultPromise = pokemonResult.map(async (poke) => await axios.get(poke.url));
    const pokemonFinalData = await axios.all(pokemonResultPromise);

    const pokemonDataFilter = pokemonFinalData.map((onePokeElement) => {
        const pokemonData = onePokeElement.data;
        return {
            id: pokemonData.id,
            name: pokemonData.name,
            types: pokemonData.types,
            image: (pokemonData.sprites.other)
                ? pokemonData.sprites.other.dream_world.front_default
                : pokemonData.sprites.front_shiny
        };
    });
    // console.log(pokemonDataFilter);
   // setPokemonList(pokemonDataFilter);
    // setIsLoading(false);.
    setUserStatesList( (states) =>({
        ...states,
        pokemonList: pokemonDataFilter,
        isLoading: false
    }));

}

useEffect(() => {
    downloadPokemons();
}, [userStatesList.pokedexUrl]);


return [userStatesList , setUserStatesList]

}


export default usePokemonList