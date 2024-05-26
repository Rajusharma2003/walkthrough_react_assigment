/* eslint-disable no-unused-vars */

import { useState } from "react"

/* eslint-disable react/prop-types */
function Todo( {TodoData , isFinished , id}) {

    const [finished , setFinished] = useState(isFinished)

    return(

        <div>

            <input type="checkbox" checked={finished} onChange={(e) => setFinished(e.target.finish)}/>
            {TodoData}
            <button>Delete</button>
            <button>Edit</button>
        </div>
        
    )
}


export default Todo