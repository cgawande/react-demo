import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Api } from "../axios/Axios";
import styles from "./LoginForm.module.css"
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { id, token } = useParams();
  const [isLoader,setLoader]=useState(false)
  const navigate = useNavigate();
  const {bgColor}=styles
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
  setLoader(true)
    const userData = {
      id: id,
     token: token,
     newPassword: newPassword,
     confirmPassword: confirmPassword,
   
    };
    try {
      const res = await Api.post("/reset-password", userData);
      console.log(res.data);
      setLoader(false)
      toast.success("User Registarion Successfully... !");
      navigate("/");
    } catch (e) {
      setLoader(false)
      console.log(e);
      console.log(e.response.data.message);
      toast.error(e.response.data.message);
    }
  };
  return (
    <div className={`${bgColor} container-fluid`}>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border rounded p-3 bg-white">
            <form onSubmit={handleSubmit}>
              <h2 className="mb-3">Reset Password</h2>
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
              {isLoader && (
                    <div className="text-center">
                    <button className="btn bg-black" type="button" disabled="">
                      <span
                        className="spinner-border spinner-border-sm text-white"
                        role="status"
     
                        aria-hidden="true"
                      />
     
                      <span className='text-white ms-1'>Loading... </span>
                    </button>
                  </div>
              )}
              {!isLoader && (
                      <button type="submit" className="btn customBtn">
                      Save Password
                    </button>
              )}
  
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </div>
  );
};

export default ResetPassword;
