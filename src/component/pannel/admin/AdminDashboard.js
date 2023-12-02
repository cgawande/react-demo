import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
let userToken=Cookies.get("token")
const AdminDashboard=()=>{

            
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
export default AdminDashboard