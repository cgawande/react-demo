import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdharCard = () => {
  const [adharSubMenu, setAdharSubMenu] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    setAdharSubMenu(!adharSubMenu);
  };

  const handleSubMenuClick = () => {
    navigate("/user/lost-adhar-form");
  };

  return (
    <>
      <Link onClick={handleMenu}>
        Adhar Card{" "}
        {adharSubMenu ? (
          <i className="bi bi-arrow-up"></i>
        ) : (
          <i className="bi bi-arrow-down"></i>
        )}
      </Link>
      {adharSubMenu && (
        <ul style={{ listStyleType: "none" }}>
          <li className="nav-link">
            <Link to="/user/lost-adhar-form">Lost Adhar</Link>
          </li>
          <li className="nav-link" onClick={handleSubMenuClick}>
            Payment
          </li>
          <li className="nav-link" onClick={handleSubMenuClick}>
            Download
          </li>
        </ul>
      )}
    </>
  );
};

export default AdharCard;
