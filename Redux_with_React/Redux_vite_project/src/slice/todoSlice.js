import {createSlice} from '@reduxjs/toolkit'


const intialstate = {
    todoList : []
}


const todoSlice = createSlice( {
    name : 'todo' , 
    intialstate,

    reducers : {

        addTodo : (state , action) => {
            let todoText = action.payload.todoText;
             state.todoList.push({id : state.length + 1 ,todoData : todoText , finished : false})
        },
        
        editTodo : (state , action) => {
            const todo = action.payload.todo;
            const todoText = action.payload.todoText;
            
            state.todoList = state.todoList.map((t) => {
                if(t.id == todo.id){
                    t.todoData = todoText
                }
                return t
            })
           
        },


        deleteTodo : (state , action) => {
            const todo = action.payload.todo
            state.todoList = state.todoList.filter(t => t.id != todo.id)


        },


        todoFinished : (state , action) => {
            const todo = action.payload.todo;
            const isFinished = action.payload.isFinished;

            state.todoList = state.todoList.map(t => {
                        if(t.id == todo.id){
                            todo.finished = isFinished
                        }
                        return t
        
                })
        }


    }

})


export  const {addTodo ,deleteTodo ,todoFinished ,editTodo}  = todoSlice.actions
export default todoSlice.reducer




// D reducerFloder , constantComponent , context , actions