import React, { useEffect, useState } from "react";
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
} from "../pannel/user/UserSidebar";
import WalletRecharge from "../pannel/user/pages/WalletRecharge";
import UserDashboard from "../pannel/user/UserDashboard";
import LostAdharForm from "../pannel/user/pages/LostAdhar";

import AdminDashboard from "../pannel/admin/AdminDashboard";
import Wallet from "../pannel/admin/pages/Walletebalance";
import UserList from "../pannel/admin/pages/UserList";
import RoleManageMent from "../pannel/admin/pages/RoleManageMent";
import SubAdminList from "../pannel/admin/pages/SubAdminList";
import Payment from "../../utils/Payment";
import PaymentGateWay from "../../utils/PaymentGateWay";
import { useSelector } from "react-redux";
import SubAdminDashboard from "../pannel/sub-admin/SubAdminDashboard";
import SubAdminLogin from "../pannel/sub-admin/pages/Dashboard";
import DobUpdate from "../pannel/user/pages/dobUpdate/DobUpdate";
import NameUpdate from "../pannel/user/pages/dobUpdate/NameUpdate";

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
        <Route path="/payment-getway" element={<PaymentGateWay />} />
        {/* User Routes */}
        <Route path="/user" element={<UserDashboard />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<WalletRecharge />} />
          <Route path={"lost-adhar-form"} element={<LostAdharForm />} />
          <Route path={"dob-update"} element={<DobUpdate />}></Route>
          <Route path={"name-update"} element={<NameUpdate />}></Route>
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<UserList />} />
          <Route path="user-list" element={<UserList />} />
          {/* <Route path="sub-admin-list" element ={<SubAdminList/>} /> */}

          <Route path="role" element={<RoleManageMent />}>
            <Route index element={<Navigate replace to="user-list" />}></Route>
            <Route path="user-list" element={<UserList />} />
            <Route path="sub-admin-list" element={<SubAdminList />} />
          </Route>
        </Route>

        {/*  Sub-Admin Routes  start*/}
        <Route path="/sub-admin" element={<SubAdminDashboard />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<SubAdminLogin />} />
        </Route>
        {/*  Sub-Admin Routes  End*/}

        {/* <Route path="/login" element={<LoginForm />} /> */}
      </Routes>
    </>
  );
}

export default RoutesNavigation;
