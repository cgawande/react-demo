import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useNavigate } from "react-router-dom";
import { adduserdata, userlogin } from "../redux/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { Api } from "../axios/Axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoader, setLoader] = useState(false);
  const userdata  = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    const res = await fetchLoginData();
    setLoader(false);
  };


const fetchLoginData =async()=>{
  try {
    const userData = {
      email: email,
      password: password,
    };
    const res = await Api.post("/login",userData)
    const user = res.data.data;
    if(res.data && res.data.token && res.data.token.length > 0 ){
      let userToken =  res.data.token;
      const expirationDate=new Date();
      expirationDate.setTime(expirationDate.getTime()+3.33*60*60*1000)
      Cookies.set("token",userToken,{expires: expirationDate})
    }
    await dispatch(adduserdata(res.data.data))
    toast.success("User Login Successfully... !");
    if (userdata) { 
      console.log("userData",user)
      if (user.role ==="user") {
        navigate("/user");
      }
      else if (user.role === "admin" || user.role === "sub-admin") {
        navigate("/admin");
      }else {
        navigate('/')
      }
    }
  }catch(e){
    // console.log(e)
    // console.log(e.response.data.message)
    // toast.error(e.response.data.message);
    toast.error("Invalid Credential");
  }
}

  const handleForgotPassword = () => {
    // Handle forgot password logic, such as redirecting to a forgot password page
    navigate("forgotpassword");
    console.log("Forgot Password clicked");
    // You can add logic to navigate to a forgot password page or display a modal
  };
  const handleSignUp = () => {
    navigate("/register");
    // Handle sign up logic, such as navigating to a sign-up page
    // You can add logic to navigate to a sign-up page or display a sign-up form
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="border rounded p-3">
            <form onSubmit={handleSubmit}>
              <h2 className="mb-3">Login</h2>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
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
                <div className="d-flex justify-content-between">
                  <label htmlFor="password" className="form-label p-0 m-0">
                    Password
                  </label>
                  <p className="p-0">
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={handleForgotPassword}
                    >
                      Forgot Password?
                    </button>
                  </p>
                </div>
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
                    <button type="submit" className="btn customBtn me-2">
                      Login
                    </button>
                  )}

                  <div>
                    <label className="btn btn-link" onClick={handleSignUp}>
                      Create a new account
                    </label>
            
                  </div>
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

export default LoginForm;
