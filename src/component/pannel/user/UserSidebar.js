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

const SidebarNavItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <NavLink
      to={to}
      className={`${styles.navItem} ${
        isActive ? styles.active : styles.inactive
      }`}
    >
      {children}
    </NavLink>
  );
};

const UserSidebar = () => {
  const [aadhaarSubMenu, setAadhaarSubMenu] = useState(false);
  const [showDobSubMenu, setShowDobSubMenu] = useState(false);
  const [showNameSubMenu, setShowNameSubMenu] = useState(false);
  const [showAddressSubMenu, setShowAddressSubMenu] = useState(false);
  const [showGenderSubMenu, setShowGenderSubMenu] = useState(false);
  const [showFindAdadhaarSubMenu, setFindAadhaarSubMenu] = useState(false);

  const isDobUpdate = () => {
    setAadhaarSubMenu(true);
    setShowDobSubMenu(!showDobSubMenu);
    setShowNameSubMenu(false);
    setShowAddressSubMenu(false);
    setShowGenderSubMenu(false);
    setFindAadhaarSubMenu(false);
  };

  const isNamebUpdate = () => {
    setAadhaarSubMenu(true);
    setShowDobSubMenu(false);
    setShowNameSubMenu(!showNameSubMenu);
    setShowAddressSubMenu(false);
    setShowGenderSubMenu(false);
    setFindAadhaarSubMenu(false);
  };

  const isAddress = () => {
    setAadhaarSubMenu(true);
    setShowDobSubMenu(false);
    setShowNameSubMenu(false);
    setShowAddressSubMenu(!showAddressSubMenu);
    setShowGenderSubMenu(false);
    setFindAadhaarSubMenu(false);
  };

  const isGender = () => {
    setAadhaarSubMenu(true);
    setShowDobSubMenu(false);
    setShowNameSubMenu(false);
    setShowAddressSubMenu(false);
    setShowGenderSubMenu(!showGenderSubMenu);
    setFindAadhaarSubMenu(false);
  };

  const isFindAadhar = () => {
    setAadhaarSubMenu(true);
    setShowDobSubMenu(false);
    setShowNameSubMenu(false);
    setShowAddressSubMenu(false);
    setShowGenderSubMenu(false);
    setFindAadhaarSubMenu(!showFindAdadhaarSubMenu);
  };

  return (
    <>
      <ul className={`${styles.sideMenu} position-sticky top-0`}>
        <li className={"p-0"}>
          <SidebarNavItem to="/user/dashboard/">
            <RiWallet3Line className={`${styles.icon}`} />
            Wallet Recharge
          </SidebarNavItem>
        </li>

        <li className="p-0">
          <SidebarNavItem to="/user/download-driver">
            <HiOutlineFolderDownload className={`${styles.icon}`} />
            Driver Download
          </SidebarNavItem>
        </li>
        <li>
          <NavLink
            to={"/user/aadhar-advance"}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.inactive}`
            }
          >
            <span className={`${styles.navItem}`}>Aadhar Advance</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <span
            className={`${styles.navItem}`}
            onClick={() => setAadhaarSubMenu(!aadhaarSubMenu)}
          >
            <FaRegIdCard className={`${styles.icon}`} />
            Aadhaar Card
            <IoIosArrowForward />
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
                    onClick={() => isDobUpdate()}
                  >
                    DOB Update
                  </span>
                </NavLink>
                {showDobSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink
                        to="/user/dob-update/doc-verify"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/dob-update/pro-req"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/dob-update/proccessing"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/dob-update/download-slip"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
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
                    onClick={() => isNamebUpdate()}
                  >
                    Name Update
                  </span>
                </NavLink>
                {showNameSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink
                        to="/user/name-update/doc-verify"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/name-update/pro-req"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/name-update/proccessing"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/name-update/download-slip"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
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
                  to={"/user/address-update"}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : `${styles.inactive}`
                  }
                >
                  <span
                    className={`${styles.navItem}`}
                    onClick={() => isAddress()}
                  >
                    Address Update
                  </span>
                </NavLink>
                {showAddressSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink
                        to="/user/address-update/doc-verify"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/address-update/pro-req"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/address-update/proccessing"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/address-update/download-slip"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
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
                <NavLink
                  to={"/user/gender-update"}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : `${styles.inactive}`
                  }
                >
                  <span
                    className={`${styles.navItem}`}
                    onClick={() => isGender(!showGenderSubMenu)}
                  >
                    Gender Update
                  </span>
                </NavLink>
                {showGenderSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink
                        to="/user/gender-update/doc-verify"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/gender-update/pro-req"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/gender-update/proccessing"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/gender-update/download-slip"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
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
                <NavLink
                  to={"/user/find-aadhar"}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : `${styles.inactive}`
                  }
                >
                  <span
                    className={`${styles.navItem}`}
                    onClick={() => isFindAadhar()}
                  >
                    Find Aadhaar
                  </span>
                </NavLink>
                {showFindAdadhaarSubMenu && (
                  <ul className={`${styles.subMenu}`}>
                    <li>
                      <NavLink
                        to="/user/find-aadhar/doc-verify"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Document Verify
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/find-aadhar/pro-req"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing Request
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/find-aadhar/proccessing"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
                        <span className={`${styles.subNavItem}`}>
                          Processing
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/user/find-aadhar/download-slip"
                        className={({ isActive }) =>
                          isActive ? `${styles.active}` : `${styles.inactive}`
                        }
                      >
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
