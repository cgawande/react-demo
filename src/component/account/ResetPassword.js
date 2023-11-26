import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Api } from "../axios/Axios";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { id, token } = useParams();
  const navigate = useNavigate();

  const passwordsMatch = () => {
    return newPassword === confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordsMatch()) {
      // Display an error message or handle the mismatch appropriately
      alert("Passwords do not match!");
      return;
    }


    getUserData()
    // Perform logic to update the password
  
    // You can add further logic, such as sending the new password to a backend for updating
  };

 const getUserData = async () => {
    const userData = {
      id: id,
     token: token,
     newPassword: newPassword,
     confirmPassword: confirmPassword,
   
    };
    try {
      const res = await Api.post("/reset-password", userData);
      console.log(res.data);
      toast.success("User Registarion Successfully... !");
      navigate("/");
    } catch (e) {
      console.log(e);
      console.log(e.response.data.message);
      toast.error(e.response.data.message);
    }
  };



  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border rounded p-3">
            <form onSubmit={handleSubmit}>
              <h2 className="mb-3">Set New Password</h2>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
