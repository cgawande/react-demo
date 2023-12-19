import React, { useState } from "react";



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
           <div className="row">
          <div className="col-sm-5 offset-3">
            <div className="container mt-5 offset-3">
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
                    type="file"
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
    </>
  );
};

export default NameUpdate;
