import React, { useEffect, useState } from "react";
import AdminSidebar from "../Sidebar";
import Header from "../Header";
import { Api } from "../../../axios/Axios";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import style from "./UserList.module.css";
function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState("");
  const [limit, setLimit] = useState(3);

  // Use lodash's debounce function to delay the invocation of userList

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
        res = await Api(
          `/users?page=${currentPage}&limit=${limit}&search=${searchTerm}`
        );
      } else {
        res = await Api(`/users?page=${currentPage}&limit=${limit}`);
      }
      setUsers(res.data.data.users);
      setTotalCount(res.data.data.totalCount);
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching user data:", error);
    }
  };
  const delayedUserList = debounce(userList, 500);
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
          <a
            className="page-link bg-black text-white"
            onClick={() => paginate(i)}
            href="#"
          >
            {i}
          </a>
        </li>
      );
    }

    return pageNumbers;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            <div className="container mt-4">
              <h2 className="text-center mb-4">User </h2>
              <div className="d-flex m-2 justify-content-center p-5">
                <button className="btn bg-black text-white activeBtnBg hoverBtn  m-2">
                  {" "}
                  App User{" "}
                </button>
                <Link to="/admin/role/sub-admin-list">
                  {" "}
                  <div className="btn btn-outline-dark m-2 hoverBtn">
                    {" "}
                    Sub Admin{" "}
                  </div>
                </Link>
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
                  <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4">
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          id="inputPassword6"
                          className="form-control m-2"
                          value={searchTerm}
                          placeholder="search by name or email"
                          onChange={handleSearch}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`table-responsive card`}>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Sr No</th>
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
                            <td>{index + 1}</td>
                            <td>{user.fullName}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td>{user?.wallet ?? ""}</td>
                            <td>{user.isActive ? "Active" : "Restrict"}</td>
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
                                    <Link className="dropdown-item hoverBtn" to="#">
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item hoverBtn" to="#">
                                      Make Sub Admin
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
                    <ul className="pagination ">
                      <li
                        className={`page-item  ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <a
                          className="page-link bg-black text-white"
                          onClick={() => paginate(1)}
                          href="#"
                        >
                          First
                        </a>
                      </li>
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <a
                          className="page-link bg-black text-white"
                          onClick={() => paginate(currentPage - 1)}
                          href="#"
                        >
                          Previous
                        </a>
                      </li>
                      {renderPageNumbers()}
                      <li
                        className={`page-item ${
                          currentPage === totalPageCount ? "disabled" : ""
                        }`}
                      >
                        <a
                          className="page-link bg-black text-white"
                          onClick={() => paginate(currentPage + 1)}
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                      <li
                        className={`page-item ${
                          currentPage === totalPageCount ? "disabled" : ""
                        }`}
                      >
                        <a
                          className="page-link bg-black text-white"
                          onClick={() => paginate(totalPageCount)}
                          href="#"
                        >
                          Last
                        </a>
                      </li>
                    </ul>
                  </nav>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
