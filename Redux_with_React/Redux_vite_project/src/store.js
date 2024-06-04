// import {combineReducers, createStore} from 'redux'



// import reducers here.
// import reducer from './reducers/todoReducers'
import Treducer from './slice/todoSlice'
import { configureStore } from '@reduxjs/toolkit'


// const combainReducer = combineReducers( {todo : Treducer}) 


// const result  = createStore(combainReducer)

const result = configureStore( {

    reducer : {
        todo : Treducer
    },
    devTools : ProcessingInstruction.env.NODE_ENV !== 'production',
})



export default result