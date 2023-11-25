import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export  const userlogin=createAsyncThunk("userlogin",async(userdata)=>{
    try{
        console.log(userdata)
    }catch(e){
        console.log(e)
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