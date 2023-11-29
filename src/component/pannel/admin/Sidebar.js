// Dashboard.js
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesNavigation from "../../routes/routes";
import styles from "./Sidebar.module.css"
import AdminAdharCard from "./sidebarmenu/AdharCard";


export const DriverDownload = () => <div>Driver Download Content</div>;


const AdminSidebar = () => {

  return (
    <>
   
      <ul className={styles.sideMenu}>
        <li className="nav-item">
          <Link to="/userdashboard/wallet-recharge" className="nav-link">
            Wallet Balance
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/driver-download" className="nav-link">
         User Create
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/role" className="nav-link">
         User List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/adhar-advance" className="nav-link">
            Adhar Card
          </Link>
        </li>
        <li className="nav-item" >

        <Link > Adhar Lost </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/pan-card-find" className="nav-link">
            Pan Card Find
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/voter-id-card" className="nav-link">
            Voter ID Card
          </Link>
        </li>
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
        <li className="nav-item">
          <Link to="/dashboard/gumasta-form" className="nav-link">
            Gumasta Form
          </Link>
        </li>
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
