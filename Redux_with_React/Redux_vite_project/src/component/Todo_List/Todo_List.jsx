/* eslint-disable react/prop-types */
// import { useState } from "react"
import { useContext } from "react"
import Todo from "../Todo/Todo"
import TodoContext from "../../context/TodoContext"
import TodoDispatchContext from "../../context/TodoDispatchContext"

function TodoList() {

    const {List} = useContext(TodoContext)
    const {dispatch} = useContext(TodoDispatchContext)

    function onFinished(todo , isFinished){
        dispatch({type : 'finished_todo' , payload: {todo , isFinished : isFinished}})
    }


    function deleteValue(todo){
       dispatch({type : 'delete_Todo' , payload : {todo}})
    }
    


    function editvalue(todo , todoText) {
       dispatch({ type : 'edit_Todo'  , payload: {todo , todoText}})
       }
    

    return (

        <div>
                                              {/* Render Todo list */}
         {List.length > 0 && List.map(todo => <Todo 
                                                   key={todo.id} 
                                                   id={todo.id} 
                                                   TodoData={todo.todoData}  
                                                   isFinished={todo.finished}
                                                   
                                                   changeFinished={(isFinished) => onFinished(todo , isFinished)}

                                                   onDelete={() => deleteValue(todo)}

                                                   onEdit={(todoText) => editvalue(todo , todoText)}
                                                   

                                                   />)}
        </div>
    ) 

}

export default TodoList