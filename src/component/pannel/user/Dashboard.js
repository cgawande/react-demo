// Dashboard.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesNavigation from '../../routes/routes';


export const DriverDownload = () => <div>Driver Download Content</div>;
export const AdharAdvance = () => <div>Adhar Advance Content</div>;
export const AdharCard = () => <div>Adhar Card Content</div>;
export const PanCardFind = () => <div>Pan Card Find Content</div>;
export const VoterIdCard = () => <div>Voter ID Card Content</div>;
export const AyushmanCard = () => <div>Ayushman Card Content</div>;
export const SambhalCard = () => <div>Sambhal Card Content</div>;
export const GumastaForm = () => <div>Gumasta Form Content</div>;
export const Forms = () => <div>Forms Content</div>;
export const Profile = () => <div>Profile Content</div>;
export const PopupMessage = () => <div>Popup Message Content</div>;

export const LostAdhar = () => <div>Lost Adhar Content</div>;
export const AdharPayment = () => <div>Adhar Payment Content</div>;
export const AdharDownload = () => <div>Adhar Download Content</div>;

const Dashboard = () => {
  return (

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className='col-md-3'>
          <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/userdashboard/wallet-recharge" className="nav-link">Wallet Recharge</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/driver-download" className="nav-link">Driver Download</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/adhar-advance" className="nav-link">Adhar Advance</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/adhar-card" className="nav-link">Adhar Card</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/pan-card-find" className="nav-link">Pan Card Find</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/voter-id-card" className="nav-link">Voter ID Card</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/ayushman-card" className="nav-link">Ayushman Card</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/sambhal-card" className="nav-link">Sambhal Card</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/gumasta-form" className="nav-link">Gumasta Form</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/forms" className="nav-link">Forms</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/popup-message" className="nav-link">Popup Message</Link>
                </li>
              </ul>
            </div>
          </nav>
          </div>
          {/* Main content */}
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1>Welcome</h1>
    <RoutesNavigation/>
          </div>
        </div>
      </div>
   
  );
};

export default Dashboard;
