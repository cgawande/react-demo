import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import Cookies from "js-cookie";

let initialState={subAdminData:""}

const subAdminSlice=createSlice({
    name:"subAdminLogin",
    initialState:initialState,
    reducers:{
        subAdminDetails:(state,action)=>{
            state.subAdminData=action.payload
        },
      emptySubAdmin:(state,action)=>{
            state.user=action.payload
        }
 
    },

})

export const {  subAdminDetails,emptySubAdmin}=subAdminSlice.actions;
export default subAdminSlice.reducer