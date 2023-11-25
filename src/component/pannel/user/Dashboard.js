// Dashboard.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesNavigation from '../../routes/routes';

export const WalletRecharge = () => <div>Wallet Recharge Content</div>;
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
                  <Link to="/dashboard/wallet-recharge" className="nav-link">Wallet Recharge</Link>
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
         
          <Routes>
            <Route path="/dashboard/wallet-recharge" element={<WalletRecharge />} />
            <Route path="/dashboard/driver-download" element={<DriverDownload />} />
            <Route path="/dashboard/adhar-advance" element={<AdharAdvance />} />
            <Route path="/dashboard/adhar-card" element={<AdharCard />} />
            <Route path="/dashboard/pan-card-find" element={<PanCardFind />} />
            <Route path="/dashboard/voter-id-card" element={<VoterIdCard />} />
            <Route path="/dashboard/ayushman-card" element={<AyushmanCard />} />
            <Route path="/dashboard/sambhal-card" element={<SambhalCard />} />
            <Route path="/dashboard/gumasta-form" element={<GumastaForm />} />
            <Route path="/dashboard/forms" element={<Forms />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/popup-message" element={<PopupMessage />} />
            <Route path="/dashboard/adhar-card/lost-adhar" element={<LostAdhar />} />
            <Route path="/dashboard/adhar-card/adhar-payment" element={<AdharPayment />} />
            <Route path="/dashboard/adhar-card/adhar-download" element={<AdharDownload />} />
          </Routes>
          </div>
        </div>
      </div>
   
  );
};

export default Dashboard;
