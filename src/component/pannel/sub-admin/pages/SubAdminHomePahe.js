import React, { useEffect, useState } from "react";
import { Api } from "../../../axios/Axios";
import Header from "../../admin/Header";
import AdminSidebar from "../../admin/Sidebar";
import { Link } from "react-router-dom";

import { get } from "react-hook-form";
function SubAdminHomePage() {
 const [users, setUsers] = useState([]);
  const [subAdmin, setSubAdmin] = useState([]);
  const [selectedSubAdmin, setSelectedSubAdmin] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [assignSubAdmin, setAssignSubAdmin] = useState(false);
  const [subadminId, setSubAdminId] = useState();
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [subadminCscId, setsubadminCscId] = useState("");
  const [productId, setProductId] = useState([]);
  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    setIsLoader(true);
    try {
      const res = await Api.get(`/product`);
      setUsers(res.data.data); 

      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getSubAdminList();
  }, []); // Fetch sub-admins on component mount

  const getSubAdminList = async () => {
    setIsLoader(true);
    try {
      const res = await Api.get(`/sub-admin`);
      setSubAdmin(res.data.data.users);
      setIsLoader(false);
    } catch (error) {
      setIsLoader(false);
      console.error("Error fetching sub-admin data:", error);
    }
  };

  const filteredSubAdmin = subAdmin.filter((item) =>
    item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      const res = await Api.put(`/users/${id}`);
    } catch (e) {
      console.log(e);
    }
  };
  const hamdleMakeSubAdmin = async (id) => {
    try {
      const res = await Api.post(`/users/${id}`, { role: "sub-admin" });

      getUserList();
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelectUsers = (id) => {
    // Check if the user ID is already in the array
    if (selectedUserIds.includes(id)) {
      // If yes, remove it
      setSelectedUserIds(selectedUserIds.filter((userId) => userId !== id));
    } else {
      // If not, add it
      setSelectedUserIds([...selectedUserIds, id]);
    }
  };

  // select the Subadmin asing for user function start
  useEffect(() => {
    if (selectedSubAdmin) {
      const foundSubAdmin = subAdmin.find(
        (subAdmin) => subAdmin.fullName === selectedSubAdmin
      );

      setsubadminCscId(foundSubAdmin.id);
    }
  }, [selectedSubAdmin]);

  // select the Subadmin asing for user function End

  // selected the user assing for subadmin start

  const selectedUserFun = async () => {
    const selectedUsers = selectedUserIds.map((index) => users[index]);
    const getUserId = selectedUsers.map((ele) => ele.id);
    setProductId(getUserId);
    await aasignUser(getUserId); // Pass the user IDs as an argument
  };
  
  const aasignUser = async (userIds) => {
    try {
      console.log(userIds);
      const res = await Api.post("/assign", {
        userId: subadminCscId,
        productIds: userIds,
      });
  
      getUserList();
      console.log("res", res);
      alert("success");
    } catch (e) {
      console.log(e);
    }
  };
  // selected the user assing for subadmin End

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
           
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className={`table-responsive `}>
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
                <tr key={user.id}>
                  <td>
                    {index + 1}
                    {assignSubAdmin && (
                      <input
                        type="checkbox"
                        className="ms-3"
                        onChange={() => handleSelectUsers(index)}
                        checked={selectedUserIds.includes(index)}
                      />
                    )}
                  </td>
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
                          <Link className="dropdown-item hoverBtn" to="#">
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
                            onClick={() => hamdleMakeSubAdmin(user.id)}
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
    </>
  );
}
 
export default SubAdminHomePage;
