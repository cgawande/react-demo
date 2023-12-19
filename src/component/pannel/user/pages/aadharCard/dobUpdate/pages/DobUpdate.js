import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";


const DobUpdate = () => {
  const [userDob, setUserDob] = useState(" ");
  const [isLoader, setIsLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    gender: "male",
    address: "",
    pinCode: "",
    aadhaarFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // Check if the input is a file input

    const fileValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: fileValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userdata = new FormData();
    userdata.append("type", "aadhar");
    userdata.append("updateType", "DOB");
    userdata.append("applicantName", formData.name);
    userdata.append("applicantFatherName", formData.fatherName);
    userdata.append("applicantMotherName", formData.motherName);
    userdata.append("DOB", userDob);
    userdata.append("files", formData.aadhaarFile);
    getDobData(userdata);
  };

  const getDobData = async (data) => {
    setIsLoader(true);
    try {
      const res = await Api.post("/product/aadhar", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res",res)
      setIsLoader(false);
    } catch (error) {
      console.log("dob aadhar error", error);
      setIsLoader(false);
    }
  };

  return (
    <>
       <div className="row">
              <div className="col-sm-5 offset-3">
                <div className="container mt-5">
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
                          onChange={(e) => setUserDob()}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          upload Aadhaar
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="aadhaarFile" // Corrected ID
                          name="aadhaarFile" // Corrected name
                          value={formData.dob}
                          onChange={handleChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                         { isLoader ? "Loading" :"Submit" } 
                        </button>                     
                  
                    </form>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default DobUpdate;
