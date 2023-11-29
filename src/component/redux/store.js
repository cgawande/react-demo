import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login/loginSlice";
import registerSlice  from  "./register"
const store = configureStore({
    
    reducer: {
     login:loginSlice,
     register:registerSlice
    }
})
export default store