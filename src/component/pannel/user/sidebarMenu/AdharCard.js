import React, { useEffect, useState } from "react";
import { Api } from "../../../axios/Axios";
import Header from "../../admin/Header";
import AdminSidebar from "../../admin/Sidebar";
import { Link } from "react-router-dom";
function AadharCard() {
  const [users, setUsers] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    getUserList();
  
  }, [users]);
  const getUserList = async () => {
    setIsLoader(true);
    try {
      const res = await Api.get(`/product`);
      setUsers(res.data.data);
 console.log("list",res.data.data)
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching user data:", error);
    }
  };


  const hamdleDelete = async (id) => {
    try {
      const res = await Api.delete(`/users/${id}`);

      getUserList();
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
  const hamdleMakeSubAdmin = async (id) => {
    try {
      console.log(id);
      const res = await Api.post(`/users/${id}`, { role: "sub-admin" });

      getUserList();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div
            className="col-sm-2 p-0 m-0"
            style={{
              height: "100vh",
              overflowY: "auto",
              position: "sticky",
              top: 0,
            }}
          >
            <AdminSidebar />
          </div>
          <div className="col-sm-10 p-0 m-0">
            <Header />
            <div className="container mt-4">
              <h2 className="text-center mb-4">User </h2>
              <div className={`table-responsive card`}>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>CSC ID</th>
                          <th>Name</th>
                          <th>Update Type</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user?.cscId ?? ""}</td>
                            <td>{user.applicantName}</td>
                            <td>{user.updateType}</td>
                            <td>{user.createdAt}</td>
                            <td>{user?.status}</td>
                        
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
                                      onClick={() => hamdleDelete(user.id)}
                                    >
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item hoverBtn"
                                      to="#"
                                      onClick={() =>
                                        hamdleMakeSubAdmin(user.id)
                                      }
                                    >
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
            </div>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default AadharCard;
