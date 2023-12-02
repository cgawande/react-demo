import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
let userToken = Cookies.get("token");
const UserDashboard = () => {

  const { user } = useSelector((state) => state.login);
  console.log(user);

  if (userToken) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};
export default UserDashboard;
