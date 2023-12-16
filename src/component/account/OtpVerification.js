import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import styles from "./LoginForm.module.css"
const OTPVerification = () => {
  const [otp, setOTP] = useState('');

  
  const {bgColor}=styles
const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/newpassword")
    // Perform OTP verification logic here using the entered OTP
    console.log('Entered OTP:', otp);
    // You can add further logic, such as verifying the OTP with a backend server
  };

  return (
    <div className={`${bgColor} container-fluid`}>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">OTP Verification</h2>
            <p>Please enter the OTP sent to your mobile/email.</p>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">Enter OTP</label>
              <input
                type="text"
                className="form-control"
                id="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Verify OTP</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OTPVerification;
