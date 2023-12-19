// import React, { useState } from "react";
// import Sidebar from "../UserSidebar";
// import RoutesNavigation, { UserRoutes } from "../../../routes/routes";
// import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// import UserDashboard from "../UserDashboard";
// import LostAdharForm from "./LostAdhar";
// import DobUpdate from "./dobUpdate/pages/DobUpdate";
// import NameUpdate from "./nameUpdate/pages/NameUpdate";
// import GenderUpdate from "./genderUpdate/pages/GenderUpdate";
// import FindAadhaar from "./findAadhar/pages/FindAadhaar";
// import WalletRecharge from "./WalletRecharge";

// const MainPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     motherName: "",
//     gender: "male",
//     dob: "",
//     address: "",
//     pinCode: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any action with the form data here
//     console.log("Form Data:", formData);
//   };

//   return (
//     <>
//    <h3> this is a main page </h3>
//     </>
//   );
// };

// export default MainPage;
