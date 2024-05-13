
/** issme hum useEffect hook ka use kar rhe hai useEffect page kai fist load pai kisi
 * bhi (Api) call and (download) karta hai => useEffect kai ander ek callback funtion and 
 * and dependence array[] hota hai agar hum yai dependence array[] kai isske ander naa de to
 * page kai har reload pai woo (api) call and kisi bhi file ko download karta hai or iss 
 * dependence array[] mai hum kisi variable ko bhi dai skte hai ki kisi variable pai kisi 
 * type ka change hota hi page reloade hoga or. 
 */

import { useEffect, useState } from 'react'
import './PokemonL.css'
import axios from 'axios'
import ShowPokeData from '../ShowPokeData/ShowPokeData'

function PokemonList() {

    const [pokemonList , setPokemonList ] = useState([])
    const [isLoading , setIsLoading ] = useState([true])


    const [pokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    const [prevUrl , setPrevUrl] = useState('');//2
    const [nextUrl , setNextUrl] = useState(''); //2


    async function downloadPokemons() {
        setIsLoading(true)
        const res = await axios.get(pokedexUrl);
        const pokemonResult = res.data.results;

        setNextUrl(res.data.next); //2
        setPrevUrl(res.data.previous); //2
        
        const pokemonResultPromise = pokemonResult.map( async ( poke) => await axios.get(poke.url));   // yaha hum pokemonResult sai 20 pokemon data ko ek array mai dal rahe hai or only uska "url" nikal rahe hai 
        const pokemonFinalData =  await axios.all(pokemonResultPromise)
        
        console.log(pokemonFinalData);  // iss data kai ander {"next"} and {"prev"} milta hai
        

        const pokemonDataFilter = pokemonFinalData.map((onePokeElement) => {
            const pokemonData = onePokeElement.data
            //  yaha per hum onePokeElementData kai ander sai data ko parse kar rhe hai.
            return { 
                id : pokemonData.id,
                name : pokemonData.name ,
                types : pokemonData.types,
                image : (pokemonData.sprites.other) ? pokemonData.sprites.other.dream_world.front_default : pokemonData.sprites.front_shiny
             }
        })
        console.log(pokemonDataFilter);
        setPokemonList(pokemonDataFilter);
        setIsLoading(false);

    }


    // useEffect hook in React.js.
    useEffect( () => {
        downloadPokemons()
        
    } , [pokedexUrl])



    return (

        <div className='pokemon_list_wrapper'>

            
        {/* // conditional rendering */}

        <div className="pokemon_wrapper">
        {
        (isLoading) ? 'Loading...'
        : pokemonList.map( ( p) => <ShowPokeData  name={p.name} image={p.image} key={p.id} id={p.id}/>) 
        }
        </div>
        

        <div className="controls">
            <button disabled ={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)} >prev</button>
            <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>next</button>
        </div>

        </div>
    )
}


export default PokemonList