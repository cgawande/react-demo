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
  // state for voter card start
    const [voterSubMenu, setVoterSubMenu] = useState(false);
  const [showVDobSubMenu, setShowVDobSubMenu] = useState(false);
  const [showVNameSubMenu, setShowVNameSubMenu] = useState(false);
  const [showVAddressSubMenu, setShowVAddressSubMenu] = useState(false);
  const [showVGenderSubMenu, setShowVGenderSubMenu] = useState(false);
  const [showFindVoterSubMenu, setFindVoterSubMenu] = useState(false);
  // state for voter card end
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

// state for voter card
const isVDobUpdate = () => {
  setVoterSubMenu(true);
  setShowVDobSubMenu(!showDobSubMenu);
  setShowVNameSubMenu(false);
  setShowVAddressSubMenu(false);
  setShowVGenderSubMenu(false);
  setFindVoterSubMenu(false);
};

const isVNamebUpdate = () => {
  setVoterSubMenu(true);
  setShowVDobSubMenu(false);
  setShowVNameSubMenu(!showNameSubMenu);
  setShowVAddressSubMenu(false);
  setShowVGenderSubMenu(false);
  setFindVoterSubMenu(false);
};

const isVAddress = () => {
  setVoterSubMenu(true);
  setShowVDobSubMenu(false);
  setShowVNameSubMenu(false);
  setShowVAddressSubMenu(!showAddressSubMenu);
  setShowVGenderSubMenu(false);
  setFindVoterSubMenu(false);
};

const isVGender = () => {
setVoterSubMenu(true);
  setShowVDobSubMenu(false);
  setShowVNameSubMenu(false);
  setShowVAddressSubMenu(false);
  setShowVGenderSubMenu(!showGenderSubMenu);
  setFindVoterSubMenu(false);
};

const isVFindAadhar = () => {
  setVoterSubMenu(true);
  setShowVDobSubMenu(false);
  setShowVNameSubMenu(false);
  setShowVAddressSubMenu(false);
  setShowVGenderSubMenu(false);
  setFindVoterSubMenu(!showFindAdadhaarSubMenu);
};


  // useEffect(() => {
  //   setAadhaarSubMenu(!aadhaarSubMenu);
  // }, [aadhaarSubMenu]);
  return (
    <>
      <ul className={`sideMenu`}>
        <li className={"p-0"}>
          <SidebarNavItem to="/user/dashboard/">
            <RiWallet3Line className="icon" />
            Dashboard
          </SidebarNavItem>
        </li>
        <li className={"p-0"}>
          <SidebarNavItem to="/user/dashboard/">
            <RiWallet3Line className={`icon`} />
            Wallet Recharge
          </SidebarNavItem>
        </li>

        {/* <li className="p-0">
          <SidebarNavItem to="/user/download-driver">
            <HiOutlineFolderDownload className={`icon`} />
            Driver Download
          </SidebarNavItem>
        </li> */}
        {/* <li>
          <NavLink
            to={"/user/aadhar-advance"}
            className={({ isActive }) =>
              isActive ? `active` : `inactive`
            }
          >
            <span className="navItem">Aadhar Advance</span>
          </NavLink>
        </li> */}
        <li className="nav-item">
          
            <span
              className="navItem"
              onClick={() => setAadhaarSubMenu(!aadhaarSubMenu)}
            >
              <FaRegIdCard className={`icon`} />
            <span className="text-white"> Aadhaar Card </span> 
               <IoIosArrowForward className={`icon`} />
            </span>
       
          {aadhaarSubMenu && (
            <ul className={`subMenu`}>
              <li className="nav-item">
                <NavLink
                  to={"/user/dob-update"}
                  className={({ isActive }) =>
                    isActive ? `active` : `inactive`
                  }
                >
                  <span
                    className={`navItem`}
                    onClick={() => isDobUpdate()}
                  >
                    DOB Update
                  </span>
                </NavLink>
                {showDobSubMenu && (
                  <ul className={`subMenu`}>
                    <li>
                      <NavLink
                        to="/user/dob-update/doc-verify"
                        className={({ isActive }) =>
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                    isActive ? "active" : "inactive"
                  }
                >
                  <span
                    className="navItem"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                    isActive ? "active" : "inactive"
                  }
                >
                  <span
                    className="navItem"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                    isActive ? "active" : "inactive"
                  }
                >
                  <span
                    className="navItem"
                    onClick={() => isGender(!showGenderSubMenu)}
                  >
                    Gender Update
                  </span>
                </NavLink>
                {showGenderSubMenu && (
                  <ul className={"subMenu"}>
                    <li>
                      <NavLink
                        to="/user/gender-update/doc-verify"
                        className={({ isActive }) =>
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                    isActive ? "active" : "inactive"
                  }
                >
                  <span
                    className="navItem"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
                          isActive ? "active" : "inactive"
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
{/* code for voter card start */}

<li className="nav-item">
          
          <span
            className="navItem"
            onClick={() => setVoterSubMenu(!voterSubMenu)}
          >
            <FaRegIdCard className={`icon`} />
          <span className="text-white"> Voter Card </span> 
             <IoIosArrowForward className={`icon`} />
          </span>
     
        {voterSubMenu && (
          <ul className={`subMenu`}>
            <li className="nav-item">
              <NavLink
                to={"/user/dob-update"}
                className={({ isActive }) =>
                  isActive ? `active` : `inactive`
                }
              >
                <span
                  className={`navItem`}
                  onClick={() => isVDobUpdate()}
                >
                  DOB Update
                </span>
              </NavLink>
              {showVDobSubMenu && (
                <ul className={`subMenu`}>
                  <li>
                    <NavLink
                      to="/user/dob-update/doc-verify"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                  isActive ? "active" : "inactive"
                }
              >
                <span
                  className="navItem"
                  onClick={() => isVNamebUpdate()}
                >
                  Name Update
                </span>
              </NavLink>
              {showVNameSubMenu && (
                <ul className={`${styles.subMenu}`}>
                  <li>
                    <NavLink
                      to="/user/name-update/doc-verify"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                  isActive ? "active" : "inactive"
                }
              >
                <span
                  className="navItem"
                  onClick={() => isVAddress()}
                >
                  Address Update
                </span>
              </NavLink>
              {showVAddressSubMenu && (
                <ul className={`${styles.subMenu}`}>
                  <li>
                    <NavLink
                      to="/user/address-update/doc-verify"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                  isActive ? "active" : "inactive"
                }
              >
                <span
                  className="navItem"
                  onClick={() => isVGender(!showVGenderSubMenu)}
                >
                  Gender Update
                </span>
              </NavLink>
              {showGenderSubMenu && (
                <ul className={"subMenu"}>
                  <li>
                    <NavLink
                      to="/user/gender-update/doc-verify"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                  isActive ? "active" : "inactive"
                }
              >
                <span
                  className="navItem"
                  onClick={() => isVFindAadhar()}
                >
                  Find Aadhaar
                </span>
              </NavLink>
              {showFindVoterSubMenu && (
                <ul className={`${styles.subMenu}`}>
                  <li>
                    <NavLink
                      to="/user/find-aadhar/doc-verify"
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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
                        isActive ? "active" : "inactive"
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

{/* code for voter card end  */}
        {/* <li className="nav-item">
          <NavLink to="/dashboard/pan-card-find">
            <span className="navItem">
              <TiBusinessCard className="icon" />
              Pan Card Find{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/voter-id-card">
            <span className="navItem">
              <TiBusinessCard className="icon" />
              Voter ID Card{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/ayushman-card">
            <span className="navItem">
              <TiBusinessCard className="icon" />
              Ayushman Card{" "}
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/sambhal-card"
            // className={({ isActive }) =>
            //   isActive ? "active" : "inactive"
            // }
          >
            <span className="navItem"> Sambhal Card</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/gumasta-form"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            <span className="navItem"> Gumasta Form </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/forms"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            <span className="navItem"> Forms</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            <span className="navItem"> Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/popup-message"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            <span className="navItem"> Popup Message</span>
          </NavLink>
        </li> */}

        {/* Test */}
        <li className="nav-item">
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            <span className="navItem"> Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/popup-message"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            <span className="navItem"> Popup Message</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default UserSidebar;
