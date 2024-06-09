import { createSlice, nanoid , } from "@reduxjs/toolkit";

const initialState={
    todos: JSON.parse(localStorage.getItem('todos')) || [{ id: 1, text: "Demo todo start adding your todo" }]
}

export const  todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
           const todo={
               id:nanoid(),
               text:action.payload
           }
           state.todos.push(todo)
        },
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload )
        },
        updatetodo:(state,action)=>{
            const {id,text}=action.payload
            state.todos=state.todos.map((todo)=>todo.id===id ? todo.text=text:todo);
        }
      
        
    }
})

export const  {addtodo,updatetodo,removetodo}=todoslice.actions 

export default todoslice.reducer 

