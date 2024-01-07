import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";




const VoterDobDocVerify = () => {
    const [userDob, setUserDob] = useState(" ");
    const [formData, setFormData] = useState({
      firstName: "",
      phoneNumber: "",
      aadharNumber: "male",
      adharUpdateDetails: "",
      livePic: null, // Corrected initial value
      aadhaarFile: null,
    });
  
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
  
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
      userdata.append("firstName", formData.firstName); // Corrected key
      userdata.append("phoneNumber", formData.phoneNumber); // Corrected key
      userdata.append("aadharNumber", formData.aadharNumber);
      userdata.append("adharUpdateDetails", formData.adharUpdateDetails);
      userdata.append("livePic", formData.livePic);
      userdata.append("files", formData.aadhaarFile);
  
      console.log("Form Data:", formData);
      getDobData(userdata);
    };
  

  const getDobData = async (userdata) => {
    try {
      const res = await Api.post("/product/aadhar", userdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("dob aadhar resr", res.data);
    } catch (error) {
      console.log("dob aadhar error", error);
    }
  };

  return (
    <>
       <div className="row">
              <div className="col-sm-5 offset-3">
                <div className="container my-5">
                  <div className="border card rounded p-3">
                    <h2 className="mb-4">Document Verify Form</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="fatherName" className="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="motherName" className="form-label">
                          Aadhar Number
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="aadharNumber"
                          name="aadharNumber"
                          value={formData.aadharNumber}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="dob" className="form-label">
                          Aadhar Update Details
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="adharUpdateDetails"
                          name="adharUpdateDetails"
                          value={formData.adharUpdateDetails}
                          onChange={handleChange}
                        />
                      </div>


                           
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                        Upload Live Pic
                        </label>
                        <input
                          type="file"
                          multiple
                          className="form-control"
                          id="aadhaarFile" // Corrected ID
                          name="aadhaarFile" // Corrected name
                          value={formData.livePic}
                          onChange={handleChange}
                        />
                      </div>
                    
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Upload Aadhar Card
                        </label>
                        <input
                          type="file"
                          multiple
                          className="form-control"
                          id="aadhaarFile" // Corrected ID
                          name="aadhaarFile" // Corrected name
                          value={formData.aadhaarFile}
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

export default VoterDobDocVerify
