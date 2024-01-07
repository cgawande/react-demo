import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import AdminSidebar from "./Sidebar";
import styles from "./Sidebar.module.css";
const AdminDashboard = () => {
  let userToken = Cookies.get("token");
  if (userToken) {
    return (
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
              <AdminSidebar />
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
                <Header />
              </div>

              <div className="row my-3">
                <Outlet />
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </>
    );
  } else {
    return <Navigate to="/"/>;
  }
};
export default AdminDashboard;
