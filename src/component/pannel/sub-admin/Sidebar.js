// Dashboard.js
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesNavigation from "../../routes/routes";
import styles from "./Sidebar.module.css";
import { useSelector } from "react-redux";
export const DriverDownload = () => <div>Driver Download Content</div>;

const SubAdminSidebar = () => {
  const [voterIdPermission, setVoterIdPermission] = useState(false);
  const [adharPermission, setAdharPermission] = useState(false);
  const [panPermission, setPanPermission] = useState(false);
  const [adharAdvance, setAdharAdvancePermission] = useState(false);
  const grantedPermission = useSelector(
    (state) => state.login.user.PermissionRoles
  );

  useEffect(() => {
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
    if (setPermission.includes(4)) {
      setAdharAdvancePermission(true);
    }
  }, [grantedPermission]);

  return (
    <>
      <ul className={`${styles.sideMenu} `}>
        {adharPermission && (
          <li className="nav-item">
            <Link to="/dashboard/adhar-advance" className="nav-link">
              Adhar Card
            </Link>
          </li>
        )}

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
        
        {adharAdvance && (
          <li className="nav-item">
            <Link to="/dashboard/voter-id-card" className="nav-link">
              Voter ID Card
            </Link>
          </li>
        )}

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

export default SubAdminSidebar;
