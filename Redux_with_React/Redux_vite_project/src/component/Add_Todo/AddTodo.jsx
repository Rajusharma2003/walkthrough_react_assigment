/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from "react"
import TodoDispatchContext from "../../context/TodoDispatchContext"

// function AddTodo({updateList})
function AddTodo() {


    const [updateValue, setUpdateValue] = useState("")
    const {dispatch} = useContext(TodoDispatchContext);

    return (

        <div>

            <input
             type="text" 
             placeholder="Write your todo"
             value={updateValue}
             onChange={e => setUpdateValue(e.target.value)}
             />

        <button  onClick={() => {
            // updateList(updateValue);  bec dispatch is here.
            dispatch( {type : 'add_Todo' , payload : {todoText : updateValue}})
            setUpdateValue('');
            }}>Add</button>

        </div>
    )
}


export default AddTodo