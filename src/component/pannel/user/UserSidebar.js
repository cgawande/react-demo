// Dashboard.js
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesNavigation from "../../routes/routes";
import styles from "./Sidebar.module.css";
import { FaRegAddressCard, FaRegIdCard } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { RiWallet3Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineFolderDownload } from "react-icons/hi";
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
    if (location.pathname === "/user/dob-update") {
      setAadhaarSubMenu(true);
      setShowDobSubMenu(true);
    } else if (location.pathname === "/user/name-update") {
      setAadhaarSubMenu(true);
      setShowNameSubMenu(true);
    } else if (location.pathname === "/user/gender-update") {
      setAadhaarSubMenu(true);
      setShowGenderSubMenu(true);
    } else if (location.pathname === "/user/address-update") {
      setAadhaarSubMenu(true);
      setShowAddressSubMenu(true);
    } else if (location.pathname === "/user/find-aadhaar") {
      setAadhaarSubMenu(true);
      setFindAadhaarSubMenu(true);
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
            <span className={`${styles.navItem}`}>
              <RiWallet3Line className={`${styles.icon}`}/>
              Wallet Recharge
            </span>
          </NavLink>
        </li>

        <li className="p-0">
          <NavLink
            to="/user/download-driver"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>
              <HiOutlineFolderDownload className={`${styles.icon}`} />
              Driver Download
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
          <span
            className={`${styles.navItem}`}
            onClick={() => setAadhaarSubMenu(!aadhaarSubMenu)}
          >
            <FaRegIdCard className={`${styles.icon}`} />
            Aadhaar Card
            <IoIosArrowForward/>
          </span>
          {aadhaarSubMenu && (
            <ul className={`${styles.subMenu}`}>
              <li className="nav-item">
                <NavLink
                  to={"/user/dob-update"}
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
                <NavLink
                  to={"/user/name-update"}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : `${styles.inactive}`
                  }
                >
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
                      <NavLink to="/dashboard/address-update/payment">
                        <span className={`${styles.subNavItem}`}>Payment</span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/user/address-update"}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : `${styles.inactive}`
                  }
                >
                  <span
                    className={`${styles.navItem}`}
                    onClick={() => setShowAddressSubMenu(!showAddressSubMenu)}
                  >
                    Address Update
                  </span>
                </NavLink>
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
                <NavLink to={"/user/gender-update"}>
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

export default UserSidebar;
