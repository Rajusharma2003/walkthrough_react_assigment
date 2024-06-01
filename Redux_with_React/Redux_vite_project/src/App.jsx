// import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './component/Add_Todo/AddTodo'
import TodoList from './component/Todo_List/Todo_List'
import { bindActionCreators } from 'redux';
import { addTodo ,editTodo , deleteTodo ,todoFinished} from './actions/todoActions.js'
// import TodoContext from './context/TodoContext'
// import todoReducer from './reducers/todoReducers'
// import TodoDispatchContext from './context/TodoDispatchContext'



// import Login from './component/Login'
// import Profile from './component/Profile'
// import UseContextProvider from './context/useContextProvider'

function App() {


  // todoList sai ayay hai.
  // comment down due to the useReaducer hook.
//   const [List , setList] = useState([

//     {id : 1, todoData : 'todo 1' ,finished : false },
//     {id : 2, todoData : 'todo 2' ,finished : false }
// ])


    // const [List , dispatch] = useReducer(todoReducer , []);

    const dispatch = useDispatch();
    const action = bindActionCreators( { addTodo ,editTodo , deleteTodo ,todoFinished} , dispatch)
  return (
    // Todo start //

    // <TodoContext.Provider value={ {List}}>
    //   <TodoDispatchContext.Provider value={{dispatch}}>
    <>
      <h1>Todo</h1>
       <AddTodo addTodo={action.addTodo}/>
       <TodoList deleteTodo={action.deleteTodo} editTodo={action.editTodo} todoFinished={action.todoFinished}/>
    </>
    //    </TodoDispatchContext.Provider>
    // </TodoContext.Provider>
    


       // <UseContextProvider >
    //   <h1> Introduction about the Redux How Redux works</h1> 
    //   <Login/>
    //   <Profile/>
    // </UseContextProvider >
  ) 
}

export default App
