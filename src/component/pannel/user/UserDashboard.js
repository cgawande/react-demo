import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
const UserDashboard=()=>{
let userToken=Cookies.get("token")
if(userToken){
    return(
        <>
<Outlet/>
        </>
    )
}
else{
return <Navigate to ="/" />
}
    
}
export default UserDashboard