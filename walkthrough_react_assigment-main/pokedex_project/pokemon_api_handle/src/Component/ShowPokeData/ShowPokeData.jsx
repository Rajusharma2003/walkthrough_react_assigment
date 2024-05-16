import { Link } from 'react-router-dom'
import './ShowPokeData.css'

function ShowPokeData( { name , image, id}) {
    

    return (

        <div className='pokemon_data_cont'>

          <Link to={`/pokemon/${id}` }>
             <div className='pokemonName'>{name}</div>

             <div className='pokemonImgWrapper'>
        <img className="pokemonImg" src={image} alt={name} />
              </div>

              </Link>
            

        </div>
    )
}


export default ShowPokeData