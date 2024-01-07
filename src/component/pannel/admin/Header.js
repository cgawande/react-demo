import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css'
import { useSelector } from 'react-redux';
const Header = () => {
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
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <span className="navbar-brand userName" style={{fontWeight:"bold"}}>
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
            <span className="me-3 text-white" >Wallet Balance: INR {walletBalance}</span>
         
            <button className="btn  text-white" onClick={()=>handleLogout()}
            style={{ border:"1px solid white"}}
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};


export default Header;
