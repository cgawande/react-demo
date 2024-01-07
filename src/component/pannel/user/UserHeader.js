import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../axios/Axios';
import { useSelector } from 'react-redux';
import styles from "./Sidebar.module.css"
const UserHeader = () => {
  const { user } = useSelector((state) => state.login);
  const [name, setName] = useState();
  const [walletBalance, setWalletBalance] = useState();
useEffect(()=>{
if(user){
  setName(user.fullName);
  setWalletBalance(user.wallet);
}
},[user])




const navigate=useNavigate()
  const handleLogout = () => {
    // Handle logout logic here
    Cookies.remove('token')
    setTimeout(()=>{
        navigate("/")
    },2000)
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <span className=  {`userName me-3 navbar-brand `}>
           {name}
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-3 text-white ">Wallet Balance: INR {walletBalance}</span>
          
            <button className="btn btn-outline-white text-white"
            style={{
              border:"1px solid white"
            
            }}
            onClick={()=>handleLogout()}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserHeader;
