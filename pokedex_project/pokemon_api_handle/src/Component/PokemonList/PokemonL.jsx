
import { useEffect, useState } from 'react';
import './PokemonL.css';
import axios from 'axios';
import ShowPokeData from '../ShowPokeData/ShowPokeData';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList() {

    const { userStatesList, setUserStatesList} = usePokemonList();

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