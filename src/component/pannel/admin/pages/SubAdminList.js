import React, { useEffect, useState } from "react";
import AdminSidebar from "../Sidebar";
import Header from "../Header";
import { Api } from "../../../axios/Axios";
import { debounce } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import register from "../../../redux/register";
import { ToastContainer, toast } from "react-toastify";

function SubAdminList() {
  const [users, setUsers] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [risLoader, setLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState("");
  const [limit, setLimit] = useState(10);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [permitionOption, setpermitionOption] = useState([]);
  // Use lodash's debounce function to delay the invocation of userList
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validatePassword = () => {
    if (password !== confirmPassword) {
      toast.error("Password and confirm password do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    getUserData();
  };

  const getUserData = async () => {
    setLoader(true);
    const userData = {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phoneNumber: mobileNumber,
    };
    try {
      const res = await Api.post("/register/sub-admin", userData);
      toast.success("Sub Admin Registarion Successfully... !");
      userList();
      setLoader(false);
    } catch (e) {
      setLoader(false);

      toast.error(e.response.data.message);
    }
  };
  // const handleSubadmin = () => {
  //   dispatch(register("sub-admin"));
  //   navigate("/register");
  // };

  useEffect(() => {
    delayedUserList(); // Trigger userList when searchTerm changes with a delay of 300 milliseconds
    // Cleanup function to cancel the debounced function if the component unmounts or searchTerm changes before 300 milliseconds
    return delayedUserList.cancel;
  }, [searchTerm]);

  useEffect(() => {
    userList(); // Trigger userList when currentPage changes
  }, [currentPage]);

  const userList = async () => {
    setIsLoader(true);
    try {
      let res;
      if (searchTerm) {
        res = await Api.get(
          `/sub-admin?page=${currentPage}&limit=${limit}&search=${searchTerm}`
        );
      } else {
        res = await Api.get(`/sub-admin?page=${currentPage}&limit=${limit}`);
      }
      setUsers(res.data.data.users);
      setTotalCount(res.data.data.totalCount);
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching user data:", error);
    }
  };
  const delayedUserList = debounce(userList, 800);
  useEffect(() => {
    delayedUserList(); // Trigger userList when searchTerm changes with a delay of 300 milliseconds
    // Cleanup function to cancel the debounced function if the component unmounts or searchTerm changes before 300 milliseconds
    return delayedUserList.cancel;
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const indexOfLastUser = currentPage * limit;
  const indexOfFirstUser = indexOfLastUser - limit;

  const totalPageCount = Math.ceil(totalCount / limit);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Adjust this based on your preference

    let startPage, endPage;
    if (totalPageCount <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPageCount;
    } else {
      const middlePage = Math.ceil(maxPagesToShow / 2);
      if (currentPage <= middlePage) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + middlePage >= totalPageCount) {
        startPage = totalPageCount - maxPagesToShow + 1;
        endPage = totalPageCount;
      } else {
        startPage = currentPage - middlePage + 1;
        endPage = currentPage + middlePage - 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <Link
            className="page-link bg-black text-white"
            onClick={() => paginate(i)}
            href="#"
          >
            {i}
          </Link>
        </li>
      );
    }

    return pageNumbers;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id) => {
    try {
      const res = await Api.delete(`/users/${id}`);
      userList();
    } catch (e) {
      console.log(e);
    }
  };
  const handleStatus = async (id) => {
    try {
      console.log(id);
      const res = await Api.put(`/users/${id}`);
    } catch (e) {
      console.log(e);
    }
  };
  const hamdleMakeUser = async (id) => {
    try {
      console.log(id);
      const res = await Api.post(`/users/${id}`, { role: "user" });

      userList();
    } catch (e) {
      console.log(e);
    }
  };

  let permitionData = [
    { id: 1, name: "adhar-advance" },
    { id: 2, name: "pan-card" },
    { id: 3, name: "Gumasta Nagar" },
    { id: 4, name: "Sambhar Card" },
  ];
  const setPermition = () => {
    // const res = Api.get("url");
    return setpermitionOption(permitionData);
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div className="col-sm-2 p-0 m-0">
            <AdminSidebar />
          </div>
          <div className="col-sm-10 p-0 m-0">
            <Header />
            <div className="container  mt-4">
              <div className="d-flex m-2 justify-content-center p-5">
                <Link to="/admin/role/user-list">
                  {" "}
                  <div className="btn btn-outline-dark m-2 hoverBtn">
                    {" "}
                    App User{" "}
                  </div>
                </Link>
                <div className="btn bg-black text-white activeBtnBg m-2">
                  {" "}
                  Sub Admin{" "}
                </div>
              </div>
              {isLoader && (
                <div className="text-center">
                  <button className="btn bg-black" type="button" disabled="">
                    <span
                      className="spinner-border spinner-border-sm text-white"
                      role="status"
                      aria-hidden="true"
                    />

                    <span className="text-white ms-1">Loading... </span>
                  </button>
                </div>
              )}

              {!isLoader && (
                <>
                  <div className="row my-3">
                    <div className="col-sm-8">
                      <div className="">
                        <div
                          className="btn bg-black text-white hoverBtn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          {" "}
                          Craete Sub Admin
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          placeholder="Search by name or email"
                          id="inputPassword6"
                          className="form-control"
                          value={searchTerm}
                          aria-describedby="passwordHelpInline"
                          onChange={handleSearch}
                        />{" "}
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive card">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone Number</th>
                          <th>Email ID</th>
                          <th>Wallet Balance</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={index}>
                            <td>{user.fullName}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td>{user?.wallet ?? ""}</td>
                            <td>
                              {/* {user.isActive ? "Active" : "Restrict"} */}
                              {
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckChec"
                                    defaultChecked={
                                      user.isActive ? true : false
                                    }
                                    onChange={() => handleStatus(user._id)}
                                  />
                                </div>
                              }
                            </td>
                            <td>
                              <div className="dropdown text-center">
                                <button
                                  className="btn bg-black  dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="text-white text-center">
                                    <i
                                      className="fa fa-ellipsis-v"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <Link
                                      className="dropdown-item hoverBtn"
                                      to="#"
                                    >
                                      View
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item hoverBtn"
                                      onClick={() => handleDelete(user._id)}
                                    >
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item hoverBtn"
                                      to="#"
                                      onClick={() => hamdleMakeUser(user._id)}
                                    >
                                      Make User
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            {/* Add action button or link here */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <Link
                          className="page-link bg-black text-white"
                          onClick={() => paginate(1)}
                          href="#"
                        >
                          First
                        </Link>
                      </li>
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <Link
                          className="page-link bg-black text-white"
                          onClick={() => paginate(currentPage - 1)}
                          href="#"
                        >
                          Previous
                        </Link>
                      </li>
                      {renderPageNumbers()}
                      <li
                        className={`page-item ${
                          currentPage === totalPageCount ? "disabled" : ""
                        }`}
                      >
                        <Link
                          className="page-link bg-black text-white"
                          onClick={() => paginate(currentPage + 1)}
                          href="#"
                        >
                          Next
                        </Link>
                      </li>
                      <li
                        className={`page-item ${
                          currentPage === totalPageCount ? "disabled" : ""
                        }`}
                      >
                        <Link
                          className="page-link bg-black text-white"
                          onClick={() => paginate(totalPageCount)}
                          href="#"
                        >
                          Last
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="container ">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="border rounded p-3">
                        <form onSubmit={handleSubmit}>
                          <h2 className="mb-4">Registration</h2>

                          <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              placeholder="Enter your full name"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="mobileNumber"
                              className="form-label"
                            >
                              Mobile Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="mobileNumber"
                              placeholder="Enter your mobile number"
                              value={mobileNumber}
                              onChange={(e) => setMobileNumber(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email ID
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="confirmPassword"
                              className="form-label"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="confirmPassword"
                              placeholder="Confirm your password"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              required
                            />
                          </div>
                          <Permission
                            permissionList={permitionOption}
                            handleClick={setPermition}
                          />

                          <div className="d-flex justify-content-between">
                            {risLoader && (
                              <div className="text-center">
                                <button
                                  className="btn bg-black"
                                  type="button"
                                  disabled=""
                                >
                                  <span
                                    className="spinner-border spinner-border-sm text-white"
                                    role="status"
                                    aria-hidden="true"
                                  />

                                  <span className="text-white ms-1">
                                    Loading...{" "}
                                  </span>
                                </button>
                              </div>
                            )}
                            {!risLoader && (
                              <>
                                <div className="">
                                  <button
                                    type="submit"
                                    className="btn customBtn"
                                  >
                                    Register
                                  </button>
                                  <button
                                    data-bs-dismiss="modal"
                                    className="btn text-end mx-2 customBtn"
                                  >
                                    Close
                                  </button>
                                </div>
                              </>
                            )}

                            <div></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default SubAdminList;

export const Permission = ({ permissionList, handleClick }) => {
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [selectAll, setSelecteAll] = useState(false);

  useEffect(()=>{
    if (selectAll) {
      console.log(permissionList);
    } else {
      console.log("hjghgh");
    }
  },[selectAll])
  const handleSelectAllChange = () => {

    setSelecteAll(!selectAll);


  };

  return (
    <div className="container mt-4">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={handleClick}
        >
          Select Permission
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <form>
            {/* Select All Checkbox */}
            <div className="form-check" key="select-all">
              <input
                className="form-check-input"
                type="checkbox"
                id="select-all-checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
              <label className="form-check-label" htmlFor="select-all-checkbox">
                Select All
              </label>
            </div>

            {permissionList.map((item) => (
              <div
                className="form-check"
                key={item.id}
                // onClick={() => handleCheckboxChange(item.id, item.name)}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={item.id}
                />
                <label className="form-check-label" htmlFor={item.id}>
                  {item.name}
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

// console.log("Welcome to Programiz!");
// permission
// //  let res = await axios.get("url")
// return [{id:1,name:"adhar-advance"},{id:2,name:"pan-card"}]
// data:[{id:1,name:"adhar-advance"},{id:2,name:"pan-card"}]

// rolePermission
// data:[{id:"12",userId:1233,permissionId:1},{id:"12",userId:123",permissionId:2}]
