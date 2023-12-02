import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Api } from "../axios/Axios";
import { useSelector } from "react-redux";
import { emptySubAdmin } from "../redux/register";
// import { Api } from '../axios/Axios';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoader, setLoader] = useState(false);
  const navigate = useNavigate();
const role=useSelector((state)=>state.register)
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
    const res = await Api.post("/signup", userData);
      toast.success("User Registarion Successfully... !");
      setLoader(false);
     setTimeout(()=>{

       navigate("/");
     },2000)
    } catch (e) {
      setLoader(false);
      console.log(e);
      console.log(e.response.data.message);
      toast.error(e.response.data.message);
    }
  };

  const handleSignIn = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
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
                <label htmlFor="mobileNumber" className="form-label">
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
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-between">
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
                    Register
                  </button>
                )}

                <div>
                  <button
                    type="button "
                    className="btn btn-link"
                    onClick={handleSignIn}
                  >
                    Already registered? Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
