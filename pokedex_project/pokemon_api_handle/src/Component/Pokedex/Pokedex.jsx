

import { useState } from "react"
import PokemonList from "../PokemonList/PokemonL.jsx"
import './pokedex.css'
import SearchList from "../Search/SearchList.jsx"



function Pokedex() {
    const [setSearchTerm, setSearchT] = useState('')


    return (


        <div>
        <h1 className="input_box"> Pokedex </h1>
        
        <SearchList updateSearchTerm={setSearchT}/>
        {  setSearchTerm }

        {/*Conditional reandring  ki agar setSearchTerm ki length equal hogi (0) kai toh page blank hoga */}
        { (setSearchTerm.length == 0) ? <PokemonList/> : ""}
       
     
        </div>
    )
}


export default Pokedex