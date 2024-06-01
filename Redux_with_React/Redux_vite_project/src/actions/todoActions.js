
import {ADD_TODO , FINISHED_TODO , EDIT_TODO , DELETE_TODO } from '../constantComponent/constComponent.js'

export const todoFinished = (todo , isFinished) =>({type : FINISHED_TODO , payload: {todo ,isFinished : isFinished}})
export const addTodo = (updateValue ) => (  {type : ADD_TODO , payload : {todoText : updateValue}})
export const deleteTodo = (todo) => ( {type : DELETE_TODO , payload : {todo}})
export const editTodo = (todo , todoText) => ( { type : EDIT_TODO  , payload: {todo , todoText}})