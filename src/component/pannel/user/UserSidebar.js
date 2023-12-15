// Dashboard.js
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesNavigation from "../../routes/routes";
import styles from "./Sidebar.module.css";
import AdharCard from "./sidebarMenu/AdharCard";

export const DriverDownload = () => <div>Driver Download Content</div>;

const UserSidebar = () => {
  const [aadhaarSubMenu, setAadhaarSubMenu] = useState(false);
  const [showDobSubMenu, setShowDobSubMenu] = useState(false);
  const [showNameSubMenu, setShowNameSubMenu] = useState(false);
  const [showAddressSubMenu, setShowAddressSubMenu] = useState(false);
  const [showGenderSubMenu, setShowGenderSubMenu] = useState(false);
  const [showFindAdadhaarSubMenu, setFindAadhaarSubMenu] = useState(false);

  const location = useLocation();
  useEffect(() => {
    // Set the Aadhaar submenu to true when navigating to "user/dob-update"
    if (location.pathname === "/user/dob-update"||"/user/name-update") {
      setAadhaarSubMenu(true);
    } else {
      setAadhaarSubMenu(false);
    }
  }, [location.pathname]); 
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
            <span className={`${styles.navItem}`}>Wallet Recharge</span>
          </NavLink>
        </li>

        <li className="p-0">
          <NavLink
            to="/user/download-driver"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>Driver Download</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/adhar-advance">
            <span className={`${styles.navItem}`}>Adhar Advance</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <span
            className={`${styles.navItem}`}
            onClick={() => setAadhaarSubMenu(!aadhaarSubMenu)}
          >
            Aadhaar Card
          </span>
          {aadhaarSubMenu && (
            <ul className={`${styles.subMenu}`}>
              <li className="nav-item">
                <NavLink to={"/user/dob-update"}
                className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
                >
                  <span
                    className={`${styles.navItem}`}
                    onClick={() => setShowDobSubMenu(!showDobSubMenu)}
                  >
                    DOB Update
                  </span>
                </NavLink>
                {showDobSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/download">
                        <span className={`${styles.subNavItem}`}>
                          Download Slip
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <NavLink to= {"/user/name-update"}
                      className={({ isActive }) =>
                      isActive ? `${styles.active}` : `${styles.inactive}`
                    }>

                
                <span
                  className={`${styles.navItem}`}
                  onClick={() => setShowNameSubMenu(!showNameSubMenu)}
                >
                  Name Update
                </span>
                </NavLink>
                {showNameSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink to="/dashboard/name-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/name-update/download">
                        <span className={`${styles.subNavItem}`}>Download</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/name-update/payment">
                        <span className={`${styles.subNavItem}`}>Payment</span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <span
                  className={`${styles.navItem}`}
                  onClick={() => setShowAddressSubMenu(!showAddressSubMenu)}
                >
                  Address Update
                </span>
                {showAddressSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/download">
                        <span className={`${styles.subNavItem}`}>
                          Download Slip
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              {/* Gender update Start */}
              <li className="nav-item">
                <NavLink to ={"/user/gender-update"}>
                <span
                  className={`${styles.navItem}`}
                  onClick={() => setShowGenderSubMenu(!showGenderSubMenu)}
                >
                  Gender Update
                </span>
                </NavLink>
                {showGenderSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/download">
                        <span className={`${styles.subNavItem}`}>
                          Download Slip
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              {/* Gender Update End */}

              {/* Find Aadhaar Start */}
              <li className="nav-item">
                <NavLink to={"/user/find-aadhaar"}>
                <span
                  className={`${styles.navItem}`}
                  onClick={() =>
                    setFindAadhaarSubMenu(!showFindAdadhaarSubMenu)
                  }
                >
                  Find Aadhaar
                </span>
                </NavLink>
                {showFindAdadhaarSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/processing">
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/dob-update/download">
                        <span className={`${styles.subNavItem}`}>
                          Download Slip
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              {/* Find Aadhaar End */}
            </ul>
          )}
        </li>

        <li className="nav-item">
          <NavLink to="/dashboard/pan-card-find">
            <span className={`${styles.navItem}`}> Pan Card Find </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/voter-id-card">
            <span className={`${styles.navItem}`}> Voter ID Card </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/ayushman-card">
            <span className={`${styles.navItem}`}> Ayushman Card </span>
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

export default UserSidebar;
