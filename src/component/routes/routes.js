import React from "react";
import { Route, Routes } from "react-router-dom";
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

} from "../pannel/user/Dashboard";
import WalletRecharge from "../pannel/user/pages/WalletRecharge";

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
        <Route path="/userdashboard" element={<Dashboard />}>
          <Route path="wallet-recharge" element={<WalletRecharge />} />
          <Route path="driver-download" element={<DriverDownload />} />
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
          <Route path="adhar-download" element={<AdharDownload />} />
        </Route>

        {/* <Route path="/login" element={<LoginForm />} /> */}
      </Routes>
    </>
  );
}

export default RoutesNavigation;
