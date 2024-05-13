import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"  // is useParams sai url kai ander sai {ID} catch kar rahe hai.

function PokemonDetails() {


    const {id} = useParams()
    console.log(id);
    const [pokemon , setPokemon] = useState({})  // pokemon ki initial value ek empty {Object} hogi.

    async function downloadPokeData() {
          
        const resData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        setPokemon( {
            name : resData.data.name,
            image : resData.data.sprites.other.dream_world.front_default,
            weight : resData.data.weight,
            height : resData.data.height,
            types : resData.data.types.map( (t) => t.type.name)
        })

    }


    useEffect( () => {
     downloadPokeData()
    }, [id])

    return(
        <div className="pokemon_data_wrapper">

        <img src={pokemon.image} alt="pokemon_image"className="pokemon_image" />
        <div className="pokemon_name"> name : {pokemon.name}</div>
        <div className="pokemon_weight">weight : {pokemon.weight}</div>
        <div className="pokemon_height">height : {pokemon.height}</div>
        <div className="pokemon_types">
            { pokemon.types && pokemon.types.map( (t) => <div key={t}>{t}</div>)}
        </div>

        </div>
    ) 


}


export default PokemonDetails