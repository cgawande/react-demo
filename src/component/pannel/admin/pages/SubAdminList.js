import React, { useEffect, useState } from "react";
import AdminSidebar from "../Sidebar";
import Header from "../Header";
import { Api } from "../../../axios/Axios";
import { debounce } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import register from "../../../redux/register";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
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
  const [roleOption, setRoleOption] = useState([]);
  const [roleLoader, setRoleLoader] = useState(false);
  const [access, setAccess] = useState([]);
  const [edit, setEdit] = useState();
  const [subAdminId, setSubAdminId] = useState();

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

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

  const reset = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setMobileNumber("");
    setAccess([]);
    getPermission();
    // ... reset other state variables if needed
  };
  const registerUser = async (e) => {
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
      permissions: access ?? [],
    };
    console.log(userData);
    try {
      const res = await Api.post("/register/sub-admin", userData);
      toast.success("Sub Admin Registarion Successfully... !");
      window.location.reload();
      // reset();
      // userList();

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
    } catch (e) {}
  };
  const handleStatus = async (id) => {
    try {
      const res = await Api.put(`/users/${id}`);
    } catch (e) {}
  };
  const hamdleMakeUser = async (id) => {
    try {
      const res = await Api.post(`/users/${id}`, { role: "user" });
      userList();
    } catch (e) {}
  };

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    setRoleLoader(true);
    try {
      const res = await Api.get("/permission");
      setRoleOption(res.data.data);
      setRoleLoader(false);
    } catch (e) {
      setRoleLoader(false);
    }
  };

  // handleEdit Functionality Start
  const fetchEditdetails = async (id) => {
    setSubAdminId(id);
    setLoader(true);
    try {
      const res = await Api.get(`/user/permission/${id}`);
      setEdit(res.data.data[0]);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const handleEditdetails = async (e) => {
    setLoader(true)
    console.log("handleEditdetails");
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const res = await Api.post(`/user/permission/${subAdminId}`, {
        permissions: access ?? [],
      });
      toast.success("Sub Admin Permission Update Successfully... !");
      window.location.reload();
      console.log(res);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
    // Access form data using FormData
    // const formData = new FormData(e.target);
    // const fullName = formData.get("fullName");
    // const phoneNumber = formData.get("phoneNumber");
    // const email = formData.get("email");
    // const cscId = formData.get("cscId");
    // const wallet = formData.get("wallet");
    // ...
    // let  updateDetails= {fullName:fullName,phoneNumber:phoneNumber,email:email,cssId:cscId,wallet:wallet,  permissions: access??[]}
    // console.log(updateDetails)
    // Now you can do whatever you want with the form data, such as sending it to the server.
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div
            className="col-sm-2 p-0 m-0 bg-black"
            style={{ height: "100vh" }}
          >
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
                          data-bs-target="#addSubAdminmodal"
                        >
                          {" "}
                          Add Sub Admin
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
                          <th>CSC ID</th>
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
                            <td>{user?.cscId ?? ""}</td>
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
                                      user.status === "active" ? true : false
                                    }
                                    onChange={() => handleStatus(user.id)}
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
                                      data-bs-target="#editSubAdminmodal"
                                      data-bs-toggle="modal"
                                      onClick={() => fetchEditdetails(user.id)}
                                    >
                                      Edit Details
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item hoverBtn"
                                      onClick={() => handleDelete(user.id)}
                                    >
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item hoverBtn"
                                      to="#"
                                      onClick={() => hamdleMakeUser(user.id)}
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
        {/*Add SubAdmin   Modal  Start*/}
        <div
          className="modal fade"
          id="addSubAdminmodal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
             Register Sub Admin
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
                        <form onSubmit={registerUser}>
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
                          {/* Api calling for role option  start */}

                          {roleLoader ? (
                            "Generating Permission Option"
                          ) : (
                            <MultiCheckbox
                              roleOption={roleOption}
                              setAccess={setAccess}
                            />
                          )}

                          {/* Api calling for role option  end */}

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
                                  <span
                                    data-bs-dismiss="modal"
                                    className="btn text-end mx-2 customBtn"
                                  >
                                    Close
                                  </span>
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
        {/*Add SubAdmin   Modal  End*/}
      </>

      <>
        {/*Edit SubAdmin   Modal  Start*/}

        <div
          className="modal fade"
          id="editSubAdminmodal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          //  onHide={reset}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="">
               View Details  And Edit Permission
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
                        <form onSubmit={handleEditdetails}>
                          {/* <h2 className="mb-4">Registration</h2> */}

                          <div className="mb-3">
                            <label htmlFor="fullName" className="form-label fw-bold" >
                              Full Name : {edit?.fullName}
                            </label>
                            {/* <input
                              type="text"
                              className="form-control"
                              id="fullName"
                              placeholder="Enter your full name"
                              {...register("fullName")}
                              defaultValue={edit?.fullName}
                              required
                            /> */}
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="mobileNumber"
                              className="form-label fw-bold"
                            >
                              Mobile Number:{edit?.phoneNumber}
                            </label>
                            {/* <input
                              type="text"
                              className="form-control"
                              id="mobileNumber"
                              // placeholder="Enter your mobile number"
                              // value={mobileNumber}
                              {...register("phoneNumber")}
                              defaultValue={edit?.phoneNumber}
                              onChange={(e) => setMobileNumber(e.target.value)}
                              required
                            /> */}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">
                              Email ID : {edit?.email}
                            </label>
                            {/* <input
                              type="email"
                              className="form-control"
                              id="email"
                              // placeholder="Enter your email"
                              // value={email}
                              {...register("email")}
                              defaultValue={edit?.email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            /> */}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-bold">
                              CSC Id : {edit?.cscId}
                            </label>
                            {/* <input
                              type="text"
                              className="form-control"
                              id="password"
                              // placeholder="Enter your password"
                              // value={password}
                              {...register("cscId")}
                              defaultValue={edit?.cscId}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            /> */}
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="confirmPassword"
                              className="form-label fw-bold"
                            >
                              Wallet : {edit?.wallet}
                            </label>
                            {/* <input
                              type="number"
                              className="form-control"
                              placeholder="enter amount"
                              {...register("wallet")}
                              defaultValue={edit?.wallet}
                              required
                            /> */}
                          </div>
                          {/* previously assign  role  by admin  start */}
                          {roleLoader ? (
                            "Generating Permission Option"
                          ) : (
                            <EditMultiCheckbox
                              roleOption={roleOption}
                              setAccess={setAccess}
                              preAssignRole={edit?.PermissionRoles}
                            />
                          )}
                          {/* previously assign  role  by admin  End */}

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
                                    Update
                                  </button>
                                  <button
                                    type="button"
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
        {/*Edit SubAdmin   Modal  End*/}
      </>
    </>
  );
}

export default SubAdminList;

export const MultiCheckbox = ({ roleOption, setAccess }) => {
  const [users, setUsers] = useState([]);
  const [permission, setPermission] = useState([]);

  useEffect(() => {
    setUsers(roleOption);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
      setPermission(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
      setPermission(tempUser);
    }
  };

  const handlePermition = () => {
    const arr = permission.filter((user) => {
      return user?.isChecked == true;
    });
    setAccess(arr);
  };

  useEffect(() => {
    if (permission.length > 0) {
      handlePermition();
    }
  }, [permission]);

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h3>Assign Permission</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
      {/* <YTVideo embedId="mGV9r0wgCrI" /> */}
    </div>
  );
};

export const EditMultiCheckbox = ({ roleOption, setAccess, preAssignRole }) => {
  const [users, setUsers] = useState([]);
  const [permission, setPermission] = useState([]);

  useEffect(() => {
    // Initialize isChecked property as false for all users
    const initializedUsers = roleOption.map((user) => ({
      ...user,
      isChecked: false,
    }));
    setUsers(initializedUsers);
  }, [roleOption]);

  useEffect(() => {
    // Update the pre-checked checkboxes
    if (preAssignRole && preAssignRole[0]) {
      console.log("preAssignRole[0]", preAssignRole[0].id);
      console.log("users", users);
      const updatedUsers = users.map((user) => {
        const isPreChecked = preAssignRole.some(
          (preRole) => preRole.permissionId === user.id
        );

        return { ...user, isChecked: isPreChecked };
      });
      setUsers(updatedUsers);
    }
  }, [preAssignRole]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    let tempUser;

    if (name === "allSelect") {
      tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
    } else {
      tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: !user.isChecked } : user
      );
    }

    setUsers(tempUser);
    setPermission(tempUser);
  };

  const handlePermission = () => {
    const arr = permission.filter((user) => {
      return user?.isChecked == true;
    });
    setAccess(arr);
  };

  useEffect(() => {
    if (permission.length > 0) {
      handlePermission();
    }
  }, [permission]);

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h3>Edit Permission</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
};
