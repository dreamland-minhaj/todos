import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        count : 0,
    },
    reducers : {
        increment : (state,action)=>{
            state.count++
        },
        decrement : (state,action)  => {
            state.count--
        }
    }
});

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;