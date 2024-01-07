import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistrationForm from "../account/RegistrationForm";
import LoginForm from "../account/LoginFrom";
import ForgotPassword from "../account/ForgotPassword";
import OTPVerification from "../account/OtpVerification";
import ResetPassword from "../account/ResetPassword";
// import Dashboard, {
//   AdharAdvance,
//   AdharCard,
//   AdharDownload,
//   AdharPayment,
//   AyushmanCard,
//   DriverDownload,
//   Forms,
//   GumastaForm,
//   LostAdhar,
//   PanCardFind,
//   PopupMessage,
//   Profile,
//   SambhalCard,
//   VoterIdCard,
// } from "../pannel/user/UserSidebar";
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
import DobUpdate from "../pannel/user/pages/aadharCard/dobUpdate/pages/DobUpdate";
import DownloadSlip from "../pannel/user/pages/aadharCard/dobUpdate/pages/DownLoadSlip";
import Processing from "../pannel/user/pages/aadharCard/dobUpdate/pages/Processing";
import DocVerify from "../pannel/user/pages/aadharCard/dobUpdate/pages/DocumentVerify";
import NameUpdate from "../pannel/user/pages/aadharCard/nameUpdate/pages/NameUpdate";
import NameDocVerify from "../pannel/user/pages/aadharCard/nameUpdate/pages/DocumentVerify";
import NameProcessing from "../pannel/user/pages/aadharCard/nameUpdate/pages/Processing";
import ProcessingReq from "../pannel/user/pages/aadharCard/dobUpdate/pages/ProcessingReq";
import NameDownloadSlip from "../pannel/user/pages/aadharCard/nameUpdate/pages/DownLoadSlip";
import GenderUpdate from "../pannel/user/pages/aadharCard/genderUpdate/pages/GenderUpdate";
import GenderDocVerify from "../pannel/user/pages/aadharCard/genderUpdate/pages/DocumentVerify";
import GenderProcessing from "../pannel/user/pages/aadharCard/genderUpdate/pages/Processing";
import GenderProcessingReq from "../pannel/user/pages/aadharCard/genderUpdate/pages/ProcessingReq";
import FindAadhaar from "../pannel/user/pages/aadharCard/findAadhar/pages/FindAadhaar";
import FindAadharDocVerify from "../pannel/user/pages/aadharCard/findAadhar/pages/DocumentVerify";
import FindAadhaarProcessing from "../pannel/user/pages/aadharCard/findAadhar/pages/Processing";
import FindAadhaarDownloadSlip from "../pannel/user/pages/aadharCard/findAadhar/pages/DownLoadSlip";
import AddressUpdate from "../pannel/user/pages/aadharCard/addressUpdate/pages/AddressUpdate";
import AddressDocVerify from "../pannel/user/pages/aadharCard/addressUpdate/pages/DocumentVerify";
import AddressProcessing from "../pannel/user/pages/aadharCard/addressUpdate/pages/Processing";
import AddressDownloadSlip from "../pannel/user/pages/aadharCard/addressUpdate/pages/DownLoadSlip";
import AdharCard from "../pannel/user/sidebarMenu/AdharCard";
import AdvanceAadhar from "../pannel/user/pages/advanceAadhar/pages/AdvanceAadhar";
import AadharCard from "../pannel/admin/pages/AdharCard";
import VoterDocVerify from "../pannel/user/pages/votaerCard/dobUpdate/pages/VoterDocumentVerify";
import VoterDobDocVerify from "../pannel/user/pages/votaerCard/dobUpdate/pages/VoterDocumentVerify";
import VoterDobProcessing from "../pannel/user/pages/votaerCard/dobUpdate/pages/VoterProcessing";
import VoterDobDownloadSlip from "../pannel/user/pages/votaerCard/dobUpdate/pages/VoterDownLoadSlip";
import VoterDobUpdate from "../pannel/user/pages/votaerCard/dobUpdate/pages/VoterDobUpdate";
import VoterNameUpdate from "../pannel/user/pages/votaerCard/nameUpdate/pages/NameUpdate";
import VoterNameDocVerify from "../pannel/user/pages/votaerCard/nameUpdate/pages/DocumentVerify";
import VoterNameProcessing from "../pannel/user/pages/votaerCard/nameUpdate/pages/Processing";
import VoterNameProcessingReq from "../pannel/user/pages/votaerCard/nameUpdate/pages/ProcessingReq";
import VoterNameDownloadSlip from "../pannel/user/pages/votaerCard/nameUpdate/pages/DownLoadSlip";
import VoterGenderUpdate from "../pannel/user/pages/votaerCard/genderUpdate/pages/GenderUpdate";
import VoterGenderDownloadSlip from "../pannel/user/pages/votaerCard/genderUpdate/pages/DownLoadSlip";
import VoterGenderProcessing from "../pannel/user/pages/votaerCard/genderUpdate/pages/Processing";
import VoterGenderProcessingReq from "../pannel/user/pages/votaerCard/genderUpdate/pages/ProcessingReq";
import SubAdminHomePage from "../pannel/sub-admin/pages/SubAdminHomePahe";

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
          <Route path={"aadhar-advance"} element={<AdvanceAadhar />} />
          {/* <Route path={"download-driver"} element={<Fin />}></Route> */}
          {/* Adhar dob-update routes Start */}
          <Route
            path={"dob-update/pro-req"}
            element={<WalletRecharge />}
          ></Route>
          <Route path={"dob-update/doc-verify"} element={<DocVerify />}></Route>
          <Route path={"dob-update/proccessing"} element={<Processing />} />
          <Route path={"dob-update/download-slip"} element={<DownloadSlip />} />
          <Route path={"dob-update"} element={<DobUpdate />} />
          {/* Adhar dob-update End */}

          {/* Voter dob-update routes Start */}
          <Route
            path={"dob-update/pro-req"}
            element={<WalletRecharge />}
          ></Route>
          <Route
            path={"voter-dob-update/doc-verify"}
            element={<VoterDobDocVerify />}
          ></Route>
          <Route
            path={"voter-dob-update/proccessing"}
            element={<VoterDobProcessing />}
          />
          <Route
            path={"dob-update/download-slip"}
            element={<VoterDobDownloadSlip />}
          />
          <Route path={"voter-dob-update"} element={<VoterDobUpdate />} />
          {/* Voter dob-update End */}

          {/* Voter name-update Start*/}
          <Route path={"name-update"} element={<VoterNameUpdate />}></Route>
          <Route
            path={"voter-name-update/doc-verify"}
            element={<VoterNameDocVerify />}
          ></Route>
          <Route
            path={"voter-name-update/proccessing"}
            element={<VoterNameProcessing />}
          />
          <Route
            path={"voter-name-update/pro-req"}
            element={<VoterNameProcessingReq />}
          />
          <Route
            path={"voter-name-update/download-slip"}
            element={<VoterNameDownloadSlip />}
          />
          <Route path={"name-update"} element={<DobUpdate />} />
          {/* Voter Name Update Route End */}

          {/* Voter gender-update Start*/}
          <Route path={"voter-gender-update"} element={<VoterGenderUpdate />}></Route>
          <Route
            path={"voter-gender-update/doc-verify"}
            element={<VoterDobDocVerify/>}
          ></Route>
          <Route
            path={"voter-gender-update/proccessing"}
            element={<VoterGenderProcessing />}
          />
          <Route
            path={"gender-update/pro-req"}
            element={<VoterGenderProcessingReq />}
          />
          <Route
            path={"voter-gender-update/download-slip"}
            element={<VoterGenderDownloadSlip />}
          />

          {/* VOter gendere Update Route End */}

          {/*Aadhar name-update Start*/}
          <Route path={"name-update"} element={<NameUpdate />}></Route>
          <Route
            path={"name-update/doc-verify"}
            element={<NameDocVerify />}
          ></Route>
          <Route
            path={"name-update/proccessing"}
            element={<NameProcessing />}
          />
          <Route path={"name-update/pro-req"} element={<ProcessingReq />} />
          <Route
            path={"name-update/download-slip"}
            element={<NameDownloadSlip />}
          />
          <Route path={"name-update"} element={<DobUpdate />} />
          {/* Aadhar Name Update Route End */}

          {/* gender-update Start*/}
          <Route path={"gender-update"} element={<GenderUpdate />}></Route>
          <Route
            path={"gender-update/doc-verify"}
            element={<GenderDocVerify />}
          ></Route>
          <Route
            path={"gender-update/proccessing"}
            element={<GenderProcessing />}
          />
          <Route
            path={"gender-update/pro-req"}
            element={<GenderProcessingReq />}
          />
          <Route
            path={"gender-update/download-slip"}
            element={<NameDownloadSlip />}
          />

          {/*gendere Update Route End */}

          {/* find-aadharupdate Start*/}
          <Route path={"find-aadhar"} element={<FindAadhaar />}></Route>
          <Route
            path={"find-aadhar/doc-verify"}
            element={<FindAadharDocVerify />}
          ></Route>
          <Route
            path={"find-aadhar/proccessing"}
            element={<FindAadhaarProcessing />}
          />
          <Route path={"find-aadhar/pro-req"} element={<WalletRecharge />} />
          <Route
            path={"find-aadhar/download-slip"}
            element={<FindAadhaarDownloadSlip />}
          />

          {/*gfind-aadharUpdate Route End */}

          {/* address-update Start*/}
          <Route path={"address-update"} element={<AddressUpdate />}></Route>
          <Route
            path={"address-update/doc-verify"}
            element={<AddressDocVerify />}
          ></Route>
          <Route
            path={"address-update/proccessing"}
            element={<AddressProcessing />}
          />
          <Route path={"address-update/pro-req"} element={<WalletRecharge />} />
          <Route
            path={"address-update/download-slip"}
            element={<AddressDownloadSlip />}
          />

          {/* address Update Route End */}
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<UserList />} />
          <Route path="aadhaar" element={<AadharCard />} />
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
          <Route path="dashboard" element={<SubAdminHomePage/>} />
        </Route>
        {/*  Sub-Admin Routes  End*/}

        {/* <Route path="/login" element={<LoginForm />} /> */}
      </Routes>
    </>
  );
}

export default RoutesNavigation;
