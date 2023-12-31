import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";



const AddressDocVerify = () => {
   
  const [isLoader, setIsLoader] = useState(false);
  const [fileAadhar, setAdharFile] = useState([]);
  const [uploadPic, setUploadPic] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    aadharNumber: "",
    aadharUpdateDetails: "",
   
  });

  const handleAadharFile = (e) => {
    setAdharFile(e.target.files);
  };
  const handleLivePic = (e) => {
    setUploadPic(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userdata = new FormData();

    for (let i = 0; i < fileAadhar.length; i++) {
      userdata.append("files", fileAadhar[i]);
    }

    userdata.append("type", "aadhar");
    userdata.append("updateType", "address");
    userdata.append("applicantName", formData.name);
    userdata.append("phoneNumber", formData.phoneNumber);
    userdata.append("aadharNumber", formData.aadharNumber);
    userdata.append("aadharUpdateDetails", formData.aadharUpdateDetails);
    userdata.append("file", uploadPic);
    await getDobData(userdata);
  };

  const getDobData = async (data) => {
    setIsLoader(true);
    try {
      const res = await Api.post("/product/aadhar", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Documents Submitted SuccesFully  ",{
        position: toast.POSITION.TOP_CENTER});
        Navigate("/user/address-update/proccessing")
      console.log("res", res);
    } catch (error) {
      console.log(error.response)
      // console.log("error",error);
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-5 offset-3">
          <div className="container mt-5">
            <div className="border card shadow rounded p-3">
              <h2 className="mb-4">Address Application Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Applicant Name
                  </label>
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="aadharNumber" className="form-label">
                    AadharNumber
                  </label>
                  <input
                  required
                    type="text"
                    className="form-control"
                    id="aadharNumbere"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="aadharUpdateDetails" className="form-label">
                    Aadhar Update Details
                  </label>
                  <input
                  required
                    type="text"
                    className="form-control"
                    name="aadharUpdateDetails"
                    value={formData.aadharUpdateDetails}
                    onChange={handleChange}
                  />
                </div>
                {/* live Pic section Start  */}

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Upload your Pic
                  </label>
                  <input
              accept=".jpg, .jpeg" required
                    type="file"
                    className="form-control"
                    // value={formData.dob}
                    multiple
                   
                    // onChange={handleChange}
                    onChange={handleLivePic}
                  />
                </div>
                {/* live Pic section Start  */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    upload Aadhaar
                  </label>
                  <input
              
                    type="file"
                    className="form-control"
                    id="aadhaarFile" // Corrected ID
                    name="aadhaarFile" // Corrected name
                    // value={formData.dob}
                    multiple
                    accept=".jpg, .jpeg" required
                    // onChange={handleChange}
                    onChange={handleAadharFile}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {isLoader ? "Loading" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddressDocVerify
