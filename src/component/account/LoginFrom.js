import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../redux/login/loginSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here using email and password
    const userData = {
      email: email,
      password: password,
    };
    dispatch(userlogin(userData));
    // navigate("/userdashboard")
    // You can add further logic, such as sending data to an API for authentication
  };

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
        <div className="col-md-6">
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
                  <button type="submit" className="btn btn-primary me-2">
                    Login
                  </button>
                  <div>
                    <label className="btn btn-link" onClick={handleSignUp}>
                      Create a new account
                    </label>
                    {/* <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button> */}
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
