import { useState } from 'react'
import './App.css'
import AddTodo from './component/Add_Todo/AddTodo'
import TodoList from './component/Todo_List/Todo_List'
import TodoContext from './context/TodoContext'



// import Login from './component/Login'
// import Profile from './component/Profile'
// import UseContextProvider from './context/useContextProvider'

function App() {


  // todoList sai ayay hai.
  const [List , setList] = useState([

    {id : 1, todoData : 'todo 1' ,finished : false },
    {id : 2, todoData : 'todo 2' ,finished : false }
])
  return (
   
    // <UseContextProvider >
    //   <h1> Introduction about the Redux How Redux works</h1> 
    //   <Login/>
    //   <Profile/>
    // </UseContextProvider >


    // Todo start //

    <TodoContext.Provider value={ {List , setList}}>
      <h1>Todo</h1>

       <AddTodo updateList={(todo) => setList( [...List , {id : List.length + 1 ,todoData : todo , finished : false}])}/>

       <TodoList/>
    </TodoContext.Provider>
    
  ) 
}

export default App
