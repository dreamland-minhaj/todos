import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Feature/counter/counterSlice"
import todosReducer from "./Feature/Todos/todosSlice"

const store = configureStore({
    reducer : {
        counter : counterReducer,
        todos : todosReducer
    },
    middleware : (getDefaultMiddleWare)=>getDefaultMiddleWare(),
    devTools : true,
});

export default store;