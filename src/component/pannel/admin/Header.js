import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css'
const Header = () => {
  // Replace with your actual user data
  const userName = 'Ranjit';
  const walletBalance = '$500.00';
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0">
        <div className="container-fluid">
          <span className="navbar-brand" style={{fontWeight:"bold"}} >
           Ranjit Gawande
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
          <div className="d-flex">
            <span className="me-3" style={{fontWeight:"bold"}}> Total Wallet  Balance : INR {walletBalance}</span>
            {/* <span className="me-3">Name: {userName}</span> */}
            <button className= {`${style.hoverBtn} btn bg-black text-white`}  onClick={()=>handleLogout()}>
              LogOut
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
