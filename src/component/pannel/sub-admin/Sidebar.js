// Dashboard.js
import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesNavigation from "../../routes/routes";
import styles from "./Sidebar.module.css"
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
      (ele) => ele?.Permission?.name
    );

    if (setPermission.includes("voter-card")) {
      setVoterIdPermission(true);
    }
    if (setPermission.includes("aadhar-card")) {
      setAdharPermission(true);
    }
    if (setPermission.includes("pan-card")) {
      setPanPermission(true);
    }
    if (setPermission.includes("aadhar-advance")) {
      setAdharAdvancePermission(true);
    }
  }, [grantedPermission]);

  return (
    <>
      <ul className={`${styles.sideMenu} `}>
        {adharPermission && (
          <li className="nav-item">
            <NavLink to="/dashboard/adhar-advance" 
            className={({ isActive }) =>
              isActive ? `${styles.active} ` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
              Aadhar Card
              </span>
            </NavLink>
          </li>
        )} 

        {panPermission && (
          <li className="nav-item">
            <NavLink to="/dashboard/pan-card-find"  className={({ isActive }) =>
              isActive ? `${styles.active} ` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
              Pan Card Find
              </span>
            </NavLink>
            
          </li>
        )}

        {voterIdPermission && (
          <li className="nav-item">
            <NavLink to="/dashboard/voter-id-card" className={({ isActive }) =>
              isActive ? `${styles.active} ` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
              Voter ID Card
              </span>
            </NavLink>
          </li>
        )}
        
        {adharAdvance && (
          <li className="nav-item">
            <NavLink to="/dashboard/voter-id-card"  className={({ isActive }) =>
              isActive ? `${styles.active} ` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
             Aadhar Adavance
            </span>
            </NavLink>
          </li>
        )}

        <li className="nav-item">
          <NavLink to="/dashboard/profile"  className={({ isActive }) =>
              isActive ? `${styles.active} ` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
            Profile
            </span>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/dashboard/popup-message"  className={({ isActive }) =>
              isActive ? `${styles.active} ` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
            Popup Message
            </span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default SubAdminSidebar;
