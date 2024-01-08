import React, { useEffect, useState } from "react";
import { Api } from "../../../../../../axios/Axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DobUpdate = () => {
  const [userDob, setUserDob] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [fileAadhar, setAdharFile] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    gender: "male",
    address: "",
    pinCode: "",
  });



  const handleFile = (e) => {
    setAdharFile(e.target.files);
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
    userdata.append("updateType", "DOB");
    userdata.append("applicantName", formData.name);
    userdata.append("applicantFatherName", formData.fatherName);
    userdata.append("applicantMotherName", formData.motherName);
    userdata.append("DOB", userDob);
    console.log(userdata);
    console.log(userDob);
    await getDobData(userdata);
  };
const navigate =useNavigate()
  const getDobData = async (data) => {
    setIsLoader(true);
    try {
      const res = await Api.post("/product/aadhar", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res", res);
      toast.success("Application Submit Next Step for Document Verification", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        navigate("/user/dob-update/doc-verify");
      }, 1500);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
   
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
              <h2 className="mb-4 card-heading">Dob Application Details</h2>
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
                  <label htmlFor="fatherName" className="form-label">
                    Father Name
                  </label>
                  <input
                  required
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
                  required
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
                  required
                    type="date"
                    className="form-control"
                    onChange={(e) => setUserDob(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    upload Aadhaar
                  </label>
                  <input
                  required
                    type="file"
                    className="form-control"
                    id="aadhaarFile" // Corrected ID
                    name="aadhaarFile" // Corrected name
                    // value={formData.dob}
                    multiple
                    accept="image/*"
                    // onChange={handleChange}
                    onChange={handleFile}
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

export default DobUpdate;
