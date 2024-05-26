/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"

function AddTodo({updateList}) {


    const [updateValue, setUpdateValue] = useState("")

    return (

        <div>

            <input
             type="text" 
             placeholder="Write your todo"
             value={updateValue}
             onChange={e => setUpdateValue(e.target.value)}
             />

        <button  onClick={() => updateList(updateValue)}>Add</button>

        </div>
    )
}


export default AddTodo