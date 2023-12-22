import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";




const AddressDocVerify = () => {
   
  const [isLoader, setIsLoader] = useState(false);
  const [fileAadhar, setAdharFile] = useState([]);
  const [uploadPic, setUploadPic] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    aadharNumber: "",
    aadharUpdateDetails: "",
    uploadPic: "",
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
    userdata.append("uploadPic", uploadPic);

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
      console.log("res", res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-5 offset-3">
          <div className="container mt-5">
            <div className="border rounded p-3">
              <h2 className="mb-4">Address Application Details</h2>
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
                  <label htmlFor="phoneNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
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
                    type="file"
                    className="form-control"
                    // value={formData.dob}
                    multiple
                    accept="image/*"
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
                    accept="image/*"
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
