import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Api } from '../axios/Axios';
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

( async () => {
  try {
    const res = await Api.post("/forgot-password",{email:email})
    console.log(res)
    toast.success("Check your mail in Inbox for reset password");
  }catch(e){
    // console.log(e)
    console.log(e.response.data.message)
    toast.error("Invalid Email  Address");
  }
})()

  
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">Forgot Password</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ForgotPassword;
