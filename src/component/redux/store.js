import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login/loginSlice";
import registerSlice  from  "./register"
import comUpSlice from "./comUpSlice";
const store = configureStore({
    
    reducer: {
     login:loginSlice,
     register:registerSlice,
     compUpSlice:comUpSlice,
    }
})
export default store