// Dashboard.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesNavigation from "../../routes/routes";
import styles from "./Sidebar.module.css";
import AdharCard from "./sidebarMenu/AdharCard";

export const DriverDownload = () => <div>Driver Download Content</div>;

const UserSidebar = () => {
  const [isActive, setActive] = useState(false);
  const { activeli, setActiveLi } = useState()
  const handleActive = () => {};


  return (
    <>
      <ul
        className={`${styles.sideMenu} position-sticky top-0`}
   
      >
        <li className={""}>
          <NavLink
          
            to="/user/dashboard/"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.test}` : `${styles.inactive}`
            }
          >
            Wallet Recharge
          </NavLink>
        </li>

        <li className="">
          <NavLink
            to="/user/dob-update"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Driver Download
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/adhar-advance"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Adhar Advance
          </NavLink>
        </li>
        <li className="nav-item">
          <AdharCard style={styles} />
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/pan-card-find"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Pan Card Find
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/voter-id-card"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Voter ID Card
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/ayushman-card"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Ayushman Card
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/sambhal-card"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Sambhal Card
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/gumasta-form"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Gumasta Form
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/forms"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Forms
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/popup-message"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            Popup Message
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default UserSidebar;
