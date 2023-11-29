import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const UserDashboard=()=>{
let userToken=Cookies.get("token")
const {user} = useSelector((state) => state.login);
console.log(user);

if(userToken){
    return(
        <>
{user?.role?<Outlet/>:<div>....loding</div>}
        </>
    )
}
else{
return <Navigate to ="/" />
}
    
}
export default UserDashboard