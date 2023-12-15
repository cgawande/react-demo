import React, { useState } from "react";
import Sidebar from "../UserSidebar";
import RoutesNavigation, { UserRoutes } from "../../../routes/routes";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import UserDashboard from "../UserDashboard";
import LostAdharForm from "./LostAdhar";
import DobUpdate from "./dobUpdate/DobUpdate";
import NameUpdate from "./dobUpdate/NameUpdate";
import GenderUpdate from "./dobUpdate/GenderUpdate";
import FindAadhaar from "./dobUpdate/FindAadhaar";
import WalletRecharge from "./WalletRecharge";

const MainPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    gender: "male",
    dob: "",
    address: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div
            className="col-sm-2 p-0 m-0"
            style={{
              height: "100vh",
              overflowY: "auto",
              position: "sticky",
              top: 0,
            }}
          >
            <Sidebar />
          </div>
          <div className="col-sm-10">
       <Routes>
       <Route path="/user" element={<UserDashboard />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<WalletRecharge />} />
          <Route path={"lost-adhar-form"} element={<LostAdharForm />} />
          <Route path={"dob-update"} element={<DobUpdate />}></Route>
          <Route path={"name-update"} element={<NameUpdate />}></Route>
          <Route path={"gender-update"} element={<GenderUpdate />}></Route>
          <Route path={"find-aadhaar"} element={<FindAadhaar />}></Route>
        </Route>
        </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
