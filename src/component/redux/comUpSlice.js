import {  createSlice } from "@reduxjs/toolkit";


const initialState={wallet:"",amount:""}

const compUpSlice=createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        updateAmount:(state,action)=>{
            state.amount=action.payload
        },
      
    },

      

})

export const {  updateAmount}=compUpSlice.actions;
export default compUpSlice.reducer