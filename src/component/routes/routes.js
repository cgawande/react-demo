import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationForm from "../account/RegistrationForm";
import LoginForm from "../account/LoginFrom";
import ForgotPassword from "../account/ForgotPassword";
import OTPVerification from "../account/OtpVerification";
import ResetPassword from "../account/ResetPassword";
import Dashboard, {
  AdharAdvance,
  AdharCard,
  AdharDownload,
  AdharPayment,
  AyushmanCard,
  DriverDownload,
  Forms,
  GumastaForm,
  LostAdhar,
  PanCardFind,
  PopupMessage,
  Profile,
  SambhalCard,
  VoterIdCard,

} from "../pannel/user/Sidebar";
import WalletRecharge from "../pannel/user/pages/WalletRecharge";
import UserDashboard from "../pannel/user/UserDashboard";
import LostAdharForm from "../pannel/user/pages/LostAdhar";

import AdminDashboard from "../pannel/admin/AdminDashboard";
import Wallet from "../pannel/admin/pages/Walletebalance";
import UserList from "../pannel/admin/pages/UserList";
import RoleManageMent from "../pannel/admin/pages/RoleManageMent";
import SubAdminList from "../pannel/admin/pages/SubAdminList";
import Payment from "../../utils/Payment"
import PaymentGateWay from "../../utils/PaymentGateWay";

function RoutesNavigation() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otpverify" element={<OTPVerification />} />
        <Route path="/reset/:id/:token" element={<ResetPassword />} />
        <Route path="/payment-getway" element ={<PaymentGateWay/>}/>
        {/* User Routes */}
        <Route path="/user" element={<UserDashboard />}>
        <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<WalletRecharge />} />
          <Route path={"lost-adhar-form"} element={<LostAdharForm />}></Route>
          {/* <Route path="driver-download" element={<DriverDownload />} />
          <Route path="adhar-advance" element={<AdharAdvance />} />
          <Route path="adhar-card" element={<AdharCard />} />
          <Route path="pan-card-find" element={<PanCardFind />} />
          <Route path="voter-id-card" element={<VoterIdCard />} />
          <Route path="ayushman-card" element={<AyushmanCard />} />
          <Route path="sambhal-card" element={<SambhalCard />} />
          <Route path="gumasta-form" element={<GumastaForm />} />
          <Route path="forms" element={<Forms />} />
          <Route path="profile" element={<Profile />} />
          <Route path="popup-message" element={<PopupMessage />} />
          <Route path="lost-adhar" element={<LostAdhar />} />
          <Route path="adhar-payment" element={<AdharPayment />} />
          <Route path="adhar-download" element={<AdharDownload />} /> */}
        </Route>
{/* Admin Routes */}
<Route path="/admin" element={<AdminDashboard />}>

  <Route index element={<Navigate replace to="dashboard"/>}/> 
  <Route path ="dashboard" element= {<Wallet/>} /> 
  <Route path="user-list" element ={<UserList/>}/>
  {/* <Route path="sub-admin-list" element ={<SubAdminList/>} /> */}

  <Route path="role" element={<RoleManageMent/>}>
    <Route index element={<Navigate replace to ="user-list"/>}></Route>
  <Route path="user-list" element ={<UserList/>}/>
  <Route path="sub-admin-list" element ={<SubAdminList/>} />
  </Route>
</Route>

        {/* <Route path="/login" element={<LoginForm />} /> */}
      </Routes>
    </>
  );
}

export default RoutesNavigation;
