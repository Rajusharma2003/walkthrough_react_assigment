

import PokemonList from "../PokemonList/PokemonL.jsx"
import Search from "../Search/search.jsx"


function Pokedex() {


    return (

        <div>
        <h1 className="input_box"> Pokedex </h1>
        
        <Search/>
        <PokemonList/>
       

        </div>
    )
}


export default Pokedex