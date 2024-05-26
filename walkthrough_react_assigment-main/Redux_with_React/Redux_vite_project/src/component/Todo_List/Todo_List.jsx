/* eslint-disable react/prop-types */
// import { useState } from "react"
import Todo from "../Todo/Todo"

function TodoList( {List}) {


    return (

        <div>
                                              {/* Render Todo list */}
         {List.length > 0 && List.map(todo => <Todo 
                                                   key={todo.id} 
                                                   id={todo.id} 
                                                   TodoData={todo.todoData}  
                                                   isFinished={todo.finished}
                                                   />)}
        </div>
    ) 

}

export default TodoList