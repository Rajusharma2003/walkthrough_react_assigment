/* eslint-disable react/prop-types */
// import { useState } from "react"
// import { useContext } from "react"
// import { useDispatch, useSelector } from "react-redux"
import {  useSelector } from "react-redux"
import Todo from "../Todo/Todo"
// import action from '../../actions/todoActions.js'
// import TodoContext from "../../context/TodoContext"
// import TodoDispatchContext from "../../context/TodoDispatchContext"

function TodoList({deleteTodo , editTodo , todoFinished}) {

    // const {List} = useContext(TodoContext)
    // const {dispatch} = useContext(TodoDispatchContext)

    // const dispatch = useDispatch()
    const List = useSelector( (state) => state.todo)

    function onFinished(todo , isFinished){
        // dispatch({type : 'finished_todo' , payload: {todo , isFinished : isFinished}})
        todoFinished(todo , isFinished)
    }


    function deleteValue(todo){
    //    dispatch({type : 'delete_Todo' , payload : {todo}})
    deleteTodo(todo)
    }
    


    function editvalue(todo , todoText) {
    //    dispatch({ type : 'edit_Todo'  , payload: {todo , todoText}})
    editTodo(todo , todoText)
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