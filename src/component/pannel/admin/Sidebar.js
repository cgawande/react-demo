// Dashboard.js
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Sidebar.module.css";
import { FaRegAddressCard, FaRegIdCard } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { RiWallet3Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineFolderDownload } from "react-icons/hi";

export const DriverDownload = () => <div>Driver Download Content</div>;

const AdminSidebar = () => {
  return (
    <>
      <ul className={`sideMenu position-sticky top-0`}>
        <li className={"p-0"}>
          <NavLink
            to="/user/dashboard/"
            className={({ isActive }) => (isActive ? `active ` : `inactive`)}
          >
            <span className={`navItem`}>
              <RiWallet3Line className={`icon`} />
              Dashboard
            </span>
          </NavLink>
        </li>

        <li className={"p-0"}>
          <NavLink
            to="/user/dashboard/"
            className={({ isActive }) => (isActive ? `active ` : `inactive`)}
          >
            <span className={`navItem`}>
              <RiWallet3Line className={`icon`} />
              Wallet Recharge
            </span>
          </NavLink>
        </li>

        <li className="p-0">
          <NavLink
            to="/admin/role"
            className={({ isActive }) => (isActive ? `active` : `inactive`)}
          >
            <span className={`navItem`}>
              <HiOutlineFolderDownload className={`icon`} />
              User List
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/adhar-advance"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span className={`navItem`}>
              <span className={`icon`}>
                <FaRegAddressCard />
              </span>{" "}
              Adhar Advance
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/admin/aadhaar"}
            className={({ isActive }) => (isActive ? `active` : `inactive`)}
          >
            <span className={`navItem`}>
              <FaRegIdCard className={`icon`} />
              Aadhaar Card
              <IoIosArrowForward />
            </span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/dashboard/pan-card-find">
            <span className={`navItem`}>
              <TiBusinessCard className={`icon`} />
              Pan Card Find{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/voter-id-card">
            <span className={`navItem`}>
              <TiBusinessCard className={`icon`} />
              Voter ID Card{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/ayushman-card">
            <span className={`navItem`}>
              <TiBusinessCard className={`icon`} />
              Ayushman Card{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/sambhal-card"
            // className={({ isActive }) =>
            //   isActive ? `active` : `inactive`
            // }
          >
            <span className={`navItem`}> Sambhal Card</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/gumasta-form"
            // className={({ isActive }) =>
            //   isActive ? `active` : `inactive`
            // }
          >
            <span className={`navItem`}> Gumasta Form </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/forms"
            className={({ isActive }) => (isActive ? `active` : `inactive`)}
          >
            <span className={`navItem`}> Forms</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) => (isActive ? `active` : `inactive`)}
          >
            <span className={`navItem`}> Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/popup-message"
            className={({ isActive }) => (isActive ? `active` : `inactive`)}
          >
            <span className={`navItem`}> Popup Message</span>
          </NavLink>
        </li>

        {/* Test */}
        <li className="nav-item">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) => (isActive ? `active` : `inactive`)}
          >
            <span className={`navItem`}> Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/popup-message"
            className={({ isActive }) => (isActive ? `active` : `inactive`)}
          >
            <span className={`navItem`}> Popup Message</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AdminSidebar;
