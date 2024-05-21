/* eslint-disable no-undef */


import { useState } from "react"
import PokemonList from "../PokemonList/PokemonL.jsx"
import './pokedex.css'
import SearchList from "../Search/SearchList.jsx"
import PokemonDetails from "../PokemonDetails/PokemonDetails.jsx"



function Pokedex() {
    const [searchTerm, setSearchT] = useState('')


    return (


        <div>
        <h1 className="input_box"> Pokedex </h1>
        
        {/* updateSearchTerm is a props */}
        <SearchList updateSearchTerm={setSearchT}/>

        {/*Conditional reandring  ki agar setSearchTerm ki length equal hogi (0) kai toh page blank hoga */}
        { (!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm}  pokemonName={searchTerm}/>}
       
     
        </div>
    )
}


export default Pokedex