import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../../data/data";

const todoSLice = createSlice({
    name : "todos",
    initialState : {
        todos : [],
        error : null,
        message : null,
        loader : false
    },

    reducers : {
        getAllTodos : (state)=>{
            state.todos = todos
        },
        loadAllTodos : (state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodoData : (state,action)=>{
            state.todos = state.todos.filter((data)=>data.id != action.payload)
        }
    }


});

export const {getAllTodos,loadAllTodos,deleteTodoData} = todoSLice.actions;

export default todoSLice.reducer;