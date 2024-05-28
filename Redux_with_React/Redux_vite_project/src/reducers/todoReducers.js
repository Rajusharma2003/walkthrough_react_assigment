
function todoReducer(state , action){

        // +++++ For AddTodo ++++
    if(action.type == 'add_Todo'){
        const todoText = action.payload.todoText;
        return  [...state , {id : state.length + 1 ,todoData : todoText , finished : false}]

        // +++++ For EditTodo ++++
    }else if(action.type == 'edit_Todo'){
        const todo = action.payload.todo;
        const todoText = action.payload.todo;
        
        const updatingValue = state.map((t) => {
            if(t.id == todo.id){
                todo.todoData = todoText
            }
            return t
        })
         return updatingValue

        // +++++ For deleteTodo ++++
    }else if(action.type == 'delete_Todo'){
        const todo = action.payload.todo

        const updatingValue = state.filter(t => t.id != todo.id)
        return updatingValue

        // ++++ for finished_todo ++++ 
    }else if(action.type == 'finished_todo'){
        const todo = action.payload.todo;
        const isFinished = action.payload.isFinished;

        const updatingValue = state.map((t) => {
            if(t.id == todo.id){
                todo.finished = isFinished
            }
            return t
        })
             return updatingValue 
    }else{
        return state;
    }


    

}

export default todoReducer;