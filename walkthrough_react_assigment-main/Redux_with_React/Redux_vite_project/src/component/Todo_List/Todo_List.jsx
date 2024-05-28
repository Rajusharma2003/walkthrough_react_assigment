/* eslint-disable react/prop-types */
// import { useState } from "react"
import { useContext } from "react"
import Todo from "../Todo/Todo"
import TodoContext from "../../context/TodoContext"

function TodoList() {

    const {List , setList} = useContext(TodoContext)

    return (

        <div>
                                              {/* Render Todo list */}
         {List.length > 0 && List.map(todo => <Todo 
                                                   key={todo.id} 
                                                   id={todo.id} 
                                                   TodoData={todo.todoData}  
                                                   isFinished={todo.finished}
                                                   
                                                   changeFinished={(isFinished) => {
                                                   const updatingValue = List.map((t) => {
                                                        if(t.id == todo.id){
                                                            todo.finished = isFinished
                                                        }
                                                        return t
                                                    })
                                                       setList(updatingValue)
                                                   }}

                                                   onDelete={() => {
                                                    const updatingValue = List.filter(t => t.id != todo.id)
                                                       setList(updatingValue)
                                                   }}

                                                   onEdit={(todoText)=> {
                                                    const updatingValue = List.map((t) => {
                                                        if(t.id == todo.id){
                                                            todo.todoData = todoText
                                                        }
                                                        return t
                                                    })
                                                       setList(updatingValue)
                                                   }}
                                                   

                                                   />)}
        </div>
    ) 

}

export default TodoList