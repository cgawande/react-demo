import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

function SubAdminLogin() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div
            className="col-sm-2 p-0 m-0 bg-black"
            style={{ height: "100vh" }}
          >
            <Sidebar />
          </div>
          <div className="col-sm-10 p-0 m-0">
            <Header />
            <div className="container mt-4">
              <h2 className="text-center mb-4">Welcome To SP Service </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubAdminLogin;
