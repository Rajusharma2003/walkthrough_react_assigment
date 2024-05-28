/* eslint-disable no-unused-vars */

import { useState } from "react"

/* eslint-disable react/prop-types */
function Todo( {TodoData , isFinished , changeFinished , onDelete , onEdit}) {

    const [finished , setFinished] = useState(isFinished)

    // for the Edit button
    const [isEditing , setIsEditing] = useState(false)
    const [editText , setEditText] = useState(TodoData);

    return(

        <div>

            <input type="checkbox" checked={finished} onChange={(e) => {
                setFinished(e.target.checked)
                changeFinished(e.target.checked)
            }}/>
            {/* {TodoData} */}
            {(isEditing) ? <input type="text" value={editText} onChange={v => setEditText(v.target.value)}/> : <span>{TodoData}</span>}

            <button onClick={ () => {
                setIsEditing(!isEditing)
                onEdit(editText)
            }}>{ (!isEditing ? 'Edit' : "Save")}</button>

            <button onClick={onDelete}>Delete</button>

        </div>
        
    )
}


export default Todo