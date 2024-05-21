import useDebounce from '../../hooks/useDebounce'
import './Search.css'
 
 // eslint-disable-next-line react/prop-types
 function SearchList({ updateSearchTerm }) {

   const useDebounceCallBackHook = useDebounce((e) => updateSearchTerm(e.target.value) )
    return (

          <div className="input_box">
            <input 
            type="text" 
            placeholder="Search here your pokemon" 
            id='pokemon_name_search'
            // onChange={ (e) => updateSearchTerm(e.target.value) }
            onChange={useDebounceCallBackHook }
             />

             {/* searchTerm call here */}
          </div>
        
    )
 }


 export default SearchList