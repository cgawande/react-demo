import React, { useState } from "react";
import Sidebar from "../../UserSidebar";


const NameUpdate = () => {
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
          <div   className="col-sm-2 p-0 m-0"
            style={{
              height: "100vh",
              overflowY: "auto",
              position: "sticky",
              top: 0,
            }}>
            <Sidebar/>
          </div>
          <div className="col-sm-2 "></div>
          <div className="col-sm-5">
            <div className="container mt-5">
                <div className="border rounded p-3">
              <h2 className="mb-4">Name Application Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Applicant  Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
         
                <div className="mb-3">
                  <label htmlFor="pinCode" className="form-label">
                    Upload Aadhaar
                  </label>                                              
                  <input
                    type="text"
                    className="form-control"
                    id="pinCode"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameUpdate;
