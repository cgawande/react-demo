import React, { useState } from "react";
import Sidebar from "../Sidebar";

const LostAdharForm = () => {
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
          <div className="col-sm-2 p-0 m-0">
            <Sidebar />
          </div>
          <div className="col-sm-2 "></div>
          <div className="col-sm-5">
            <div className="container mt-5">
                <div className="border rounded p-3">
              <h2 className="mb-4">Lost Adhar Application Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
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
                  <label htmlFor="fatherName" className="form-label">
                    Father Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="motherName" className="form-label">
                    Mother Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="motherName"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="pinCode" className="form-label">
                    Pin Code
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

export default LostAdharForm;
