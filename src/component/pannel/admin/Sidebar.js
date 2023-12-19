// Dashboard.js
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Sidebar.module.css"
import { FaRegAddressCard, FaRegIdCard } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { RiWallet3Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineFolderDownload } from "react-icons/hi";


export const DriverDownload = () => <div>Driver Download Content</div>;

const AdminSidebar = () => {


  return (
    <>
      <ul className={`${styles.sideMenu} position-sticky top-0`}>
        <li className={"p-0"}>
          <NavLink
            to="/user/dashboard/"
            className={({ isActive }) =>
              isActive ? `${styles.active} ` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
              <RiWallet3Line className={`${styles.icon}`}/>
              Wallet Recharge
            </span>
          </NavLink>
        </li>

        <li className="p-0">
          <NavLink
            to="/admin/role"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
              <HiOutlineFolderDownload className={`${styles.icon}`} />
              User List
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/adhar-advance"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span className={`${styles.navItem}`}>
              <span className={`${styles.icon}`}>
                <FaRegAddressCard />
              </span>{" "}
              Adhar Advance
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/admin/aadhaar"}
          className={({isActive})=>isActive ? `${styles["active"]}` : `${styles["inactive"]}`}>
          <span
            className={`${styles.navItem}`}
      
          >
            <FaRegIdCard className={`${styles.icon}`} />
            Aadhaar Card
            <IoIosArrowForward/>
          </span>
    </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/dashboard/pan-card-find">
            <span className={`${styles.navItem}`}>
              <TiBusinessCard className={`${styles.icon}`} />
              Pan Card Find{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/voter-id-card">
            <span className={`${styles.navItem}`}>
              <TiBusinessCard className={`${styles.icon}`} />
              Voter ID Card{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/ayushman-card">
            <span className={`${styles.navItem}`}>
              <TiBusinessCard className={`${styles.icon}`} />
              Ayushman Card{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/sambhal-card"
            // className={({ isActive }) =>
            //   isActive ? `${styles.active}` : `${styles.inactive}`
            // }
          >
            <span className={`${styles.navItem}`}> Sambhal Card</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/gumasta-form"
            // className={({ isActive }) =>
            //   isActive ? `${styles.active}` : `${styles.inactive}`
            // }
          >
            <span className={`${styles.navItem}`}> Gumasta Form </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/forms"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}> Forms</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}> Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/popup-message"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}> Popup Message</span>
          </NavLink>
        </li>

        {/* Test */}
        <li className="nav-item">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}> Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/popup-message"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}> Popup Message</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AdminSidebar;
