import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../axios/Axios";
import { toast } from "react-toastify";


export  const userlogin=createAsyncThunk("userlogin",async(userdata)=>{
    try {
        const res = await Api.post("/login",userdata)
        console.log(res.data.token)
        toast.success("User Login Successfully... !");
      }catch(e){
        console.log(e)
        console.log(e.response.data.message)
        toast.error(e.response.data.message);
      }
})
const loginState = {
    token: "",
    user: null,
    status: "idle", // Change the initial status to 'idle'
  };
const loginSlice=createSlice({
    name:"login",
    initialState:loginState,
    reducers:{
        adduserdata:(state,action)=>{
            state.user=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(userlogin.pending,(state,action)=>{
            state.status = "loading"; // Updated the status to 'loading'
        })
        .addCase(userlogin.fulfilled,(state,action)=>{
            state.status = "success11"; // Updated the status to 'success'
            state.user = action.payload;
        })
        .addCase(userlogin.rejected, (state, action) => {
            state.status = "rejected"; // Updated the status to 'rejected'
          });
    }
    

})

export const {adduserdata}=loginSlice.actions;
export default loginSlice.reducer