import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "../Sidebar.module.css";
const AdharCard = () => {
  const [adharSubMenu, setAdharSubMenu] = useState(false);
  const [dobUpdate, setDobUpdate] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    setAdharSubMenu(!adharSubMenu);
  };

  const handleDobUpdate = () => {
    setDobUpdate(!dobUpdate);
  };

  const handleSubMenuClick = () => {
    navigate("/user/lost-adhar-form");
  };

  return (
    <>
      <ul>
        <li onClick={handleMenu}>Adhar Card
      {adharSubMenu && (
        <ul style={{ listStyleType: "none" }}>
          <li className="nav-link" style={{ whiteSpace: "nowrap" }}>
            <NavLink
              to="/user/lost-adhar-form"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.inactive}`
              }
            >
              Address Update
            </NavLink>
            {/* <Link to="/user/lost-adhar-form">Address Update</Link> */}
          </li>
          <ul>
            <li
              className="nav-link"
              onClick={() => {
                handleDobUpdate();
              }}
            >
              <Link to="/user/dob-update"> DOB update </Link>
              {dobUpdate ? (
                <i className="bi bi-arrow-up"></i>
              ) : (
                <i className="bi bi-arrow-down"></i>
              )}
            </li>
            {dobUpdate && (
              <>
                <NavLink to="/user/Document verify">
                  {" "}
                  <li className="nav-link">Document verify</li>
                </NavLink>
                <li className="nav-link" onClick={handleSubMenuClick}>
                  Processing Request
                </li>
                <li className="nav-link" onClick={handleSubMenuClick}>
                  Processing
                </li>
                <li className="nav-link" onClick={handleSubMenuClick}>
                  Download Slip
                </li>
              </>
            )}
          </ul>
          <NavLink to="/user/name-update">
            <li className="nav-link">Name Update</li>
          </NavLink>
          <li className="nav-link" onClick={handleSubMenuClick}>
            Gender Update
          </li>
          <li className="nav-link" onClick={handleSubMenuClick}>
            Find Adhar
          </li>
          <li className="nav-link" onClick={handleSubMenuClick}>
            Download
          </li>
        </ul>
      )}
        </li>
      </ul>
    </>
  );
};

export default AdharCard;
