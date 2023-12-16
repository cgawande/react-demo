import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Api } from "../../axios/Axios";
import { useEffect, useState } from "react";
import { adduserdata } from "../../redux/login/loginSlice";
import UserSidebar from "./UserSidebar";
const UserDashboard = () => {
  const [isLoader, setLoader] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetchDetail();
  // }, []);
  // let userToken = Cookies.get("token");
  // const fetchDetail = async () => {
  //   setLoader(true);
  //   try {
  //     const res = await Api.get("/token");
  //     dispatch(adduserdata(res.data.data));
  //     setLoader(false);
  //   } catch (error) {
  //     setLoader(false);
   
  //   }
  // };
  let userToken = Cookies.get("token");
  const { user } = useSelector((state) => state.login);
  


  if (userToken) {
    return (
      <>
 
      {isLoader?     <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <button className="btn bg-black" type="button" disabled="">
            <span
              className="spinner-border spinner-border-sm text-white"
              role="status"
              aria-hidden="true"
            />
            <span className="text-white ms-1">Loading... </span>
          </button>
        </div>
        </div>
      :
      <Outlet />}
    </>
    );
  } else {
    return <Navigate to="/" />;
  }
};
export default UserDashboard;
