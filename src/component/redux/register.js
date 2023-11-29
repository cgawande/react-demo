import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import Cookies from "js-cookie";


const registerSlice=createSlice({
    name:"login",
    initialState:"sub-admin",
    reducers:{
        registerSubAdmin:(state,action)=>{
            state.user=action.payload
        },
      emptySubAdmin:(state,action)=>{
            state.user=action.payload
        }
    },

      

})

export const { registerSubAdmin,emptySubAdmin}=registerSlice.actions;
export default registerSlice.reducer