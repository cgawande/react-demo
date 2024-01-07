import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Api } from "../../axios/Axios";
import { useEffect, useState } from "react";
import { adduserdata } from "../../redux/login/loginSlice";
import UserSidebar from "./UserSidebar";
import { FaRegAddressCard } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import UserHeader from "./UserHeader";
import styles from "./Sidebar.module.css";
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
  // const { user } = useSelector((state) => state.login);

  if (userToken) {
    return (
      <>
        <>
          <div className="container-fluid p-0">
            <div className="row p-0 m-0">
              <div
                className={`sidebarcss sidebarBg col-sm-2 p-0 m-0`}
                style={{
                  // position: "fixed",
                overflowY:"auto",
                  position: "sticky",
                  top:"20px",
                  height:"100vh"
                }}
              >
                <UserSidebar />
              </div>
              <div className={`col-sm-10`}>
                <div
                  className={`themeBg row`}
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  <UserHeader />
                </div>

                <div className="row my-3">
                  <Outlet />
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        </>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};
export default UserDashboard;
