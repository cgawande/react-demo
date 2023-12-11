// Dashboard.js
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesNavigation from "../../routes/routes";
import styles from "./Sidebar.module.css";
import { useSelector } from "react-redux";
export const DriverDownload = () => <div>Driver Download Content</div>;

const AdminSidebar = () => {
  const [voterIdPermission, setVoterIdPermission] = useState(false);
  const [adharPermission, setAdharPermission] = useState(false);
  const [panPermission, setPanPermission] = useState(false);
  const [gumastaPermission, setGumastaPermission] = useState(false);
  const [sambhalPermission, setSambhalPermission] = useState(false);
  const [userListPermission, setUserListPermission] = useState(false);
  const [adharLostPermission, setAdharLostPermission] = useState(false);
  const [ayushmanPermission, setayushmanPermission] = useState(false);
  const grantedPermission = useSelector(
    (state) => state.login.user.PermissionRoles
  );
  const checkRole = useSelector((state) => state.login.user.role);
  useEffect(() => {
    if (checkRole === "admin") {
      setAdharPermission(true);
      setVoterIdPermission(true);
      setPanPermission(true);
      setGumastaPermission(true);
      setSambhalPermission(true);
      setUserListPermission(true);
      setAdharLostPermission(true);
      setayushmanPermission(true);
    } else {
      let setPermission = grantedPermission.map(
        (permissionId) => permissionId.permissionId
      );

      if (setPermission.includes(1)) {
        setVoterIdPermission(true);
      }
      if (setPermission.includes(2)) {
        setAdharPermission(true);
      }
      if (setPermission.includes(3)) {
        setPanPermission(true);
      }
    }
  }, [grantedPermission]);

  return (
    <>
      <ul className={`${styles.sideMenu}  `}>
        <li className="nav-item">
          <Link to="/userdashboard/wallet-recharge" className="nav-link">
            Wallet Balance
          </Link>
        </li>
        <li className="nav-item" disabled>
          <Link
            to="/dashboard/driver-download"
            className="nav-link nav-link disabled"
            style={{ pointerEvents: "none", color: "gray" }}
          >
            User Create
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/role" className="nav-link">
            User List
          </Link>
        </li>
        {adharPermission && (
          <li className="nav-item">
            <Link to="/dashboard/adhar-advance" className="nav-link">
              Adhar Card
            </Link>
          </li>
        )}

        <li className="nav-item">
          <Link> Adhar Lost </Link>
        </li>
        {panPermission && (
          <li className="nav-item">
            <Link to="/dashboard/pan-card-find" className="nav-link">
              Pan Card Find
            </Link>
          </li>
        )}
        {voterIdPermission && (
          <li className="nav-item">
            <Link to="/dashboard/voter-id-card" className="nav-link">
              Voter ID Card
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="/dashboard/ayushman-card" className="nav-link">
            Ayushman Card
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/sambhal-card" className="nav-link">
            Sambhal Card
          </Link>
        </li>
        {gumastaPermission && (
          <li className="nav-item">
            <Link to="/dashboard/gumasta-form" className="nav-link">
              Gumasta Form
            </Link>
          </li>
        )}

        <li className="nav-item">
          <Link to="/dashboard/forms" className="nav-link">
            Forms
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/popup-message" className="nav-link">
            Popup Message
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AdminSidebar;
