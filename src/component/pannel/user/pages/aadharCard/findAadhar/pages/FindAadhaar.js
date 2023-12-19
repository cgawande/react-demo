import React, { useState } from "react";



const FindAadhaar = () => {
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
          <div className="col-sm-5">
            <div className="container mt-5 offset-3 ">
                <div className="border rounded p-3">
              <h2 className="mb-4">Dob Application Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Applicant Name
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
                 upload Aadhaar
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formData.dob}
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
        </div>sssssss
    </>
  );
};

export default FindAadhaar;