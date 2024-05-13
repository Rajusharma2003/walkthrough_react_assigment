
import { useEffect, useState } from 'react';
import './PokemonL.css';
import axios from 'axios';
import ShowPokeData from '../ShowPokeData/ShowPokeData';

function PokemonList() {

       // const [pokemonList , setPokemonList ] = useState([])
    // const [isLoading , setIsLoading ] = useState([true])

    // const [pokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    // const [prevUrl , setPrevUrl] = useState('');//2
    // const [nextUrl , setNextUrl] = useState(''); //2

/** if you can not use lot of the useState then you can use the morden ("useSatate").  */
    const [userStatesList, setUserStatesList] = useState({
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        pokemonList: [],
        isLoading: true,
        prevUrl: '',
        nextUrl: ''
    });

    async function downloadPokemons() {
        // setIsLoading(true)
        setUserStatesList({ ...userStatesList, isLoading: true });

        const res = await axios.get(userStatesList.pokedexUrl);
        const pokemonResult = res.data.results;

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

return (
     <div className='pokemon_list_wrapper'>
            <div className="pokemon_wrapper">
                {(userStatesList.isLoading)
                    ? 'Loading...'
                    : userStatesList.pokemonList.map((p) => (
                        <ShowPokeData name={p.name} image={p.image} key={p.id} id={p.id} />
                    ))}
            </div>

            <div className="controls">

                 {/* <button disabled ={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)} >prev</button>
                 <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>next</button> */}

                <button disabled={userStatesList.prevUrl == null} onClick={() => {
                    const urlToSet = userStatesList.prevUrl
                    setUserStatesList({ ...userStatesList, pokedexUrl: urlToSet })
                }}>prev</button>

                 <button disabled={userStatesList.nextUrl == null} onClick={() => {
                    const urlToSet = userStatesList.nextUrl
                    setUserStatesList({ ...userStatesList, pokedexUrl: urlToSet })
                }}>Next</button>
    </div>
     </div>
    );
}

export default PokemonList;