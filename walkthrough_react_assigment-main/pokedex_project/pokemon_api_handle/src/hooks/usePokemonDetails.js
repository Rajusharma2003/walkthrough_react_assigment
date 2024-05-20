import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id , pokemonName) {

    // const {id} = useParams()
    // console.log( "id of pokemon",id);
    const [pokemon , setPokemon] = useState({})  // pokemon ki initial value ek empty {Object} hogi.

    async function downloadPokeData() {
          
        // if we have excess the (pokemonName) inside the resData then hit the if condition otherwise the normal flow is running.
        let resData;
        if(pokemonName) {
             resData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        }else{
             resData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        }
        
        const similarTypesOfPokemon = await axios.get(`https://pokeapi.co/api/v2/type/${resData.data.types ? resData.data.types[0].type.name : ""}`);
      
        console.log( 'similar types of pokeom list' , similarTypesOfPokemon);

        setPokemon( {
            name : resData.data.name,
            image : resData.data.sprites.other.dream_world.front_default,
            weight : resData.data.weight,
            height : resData.data.height,
            types : resData.data.types.map( (t) => t.type.name),
            similerPokemon : similarTypesOfPokemon.data.pokemon.slice( 0,10)
        })


        // console.log("pokeDetails Res" , resData.data.types);
        setUserStatesList( {...userStatesList , type : resData.data.types ? resData.data.types[0].type.name : "" })

     
    }

    const [userStatesList , setUserStatesList] = usePokemonList()


    useEffect( () => {
     downloadPokeData()
     console.log( 'Lists',userStatesList);
    }, [])

    return [pokemon ]

}

export default usePokemonDetails;