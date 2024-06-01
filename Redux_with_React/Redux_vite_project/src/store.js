import {combineReducers, createStore} from 'redux'



// import reducers here.
// import todoReducer from './reducers./todoReducer.js'
import reducer from './reducers/todoReducers'


const combainReducer = combineReducers( {todo : reducer}) 


const result  = createStore(combainReducer)


export default result