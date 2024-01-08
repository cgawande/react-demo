import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FindAadhaar = () => {
  const [userDob, setUserDob] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    gender: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userdata = new FormData();



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
const navigate=useNavigate()
  const getDobData = async (data) => {
    setIsLoader(true);
    try {
      const res = await Api.post("/product/aadhar", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Application Submit Next Step for Document Verification", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        navigate("/user/find-aadhar/doc-verify");
      }, 1500);
  
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("dob aadhar error", error);
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
              <h2 className="mb-4">Find Aadhar Application Details</h2>
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
                    required
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
                    required
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
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <div>
                    <input
                     required
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div>
                    <input
                     required
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
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
                  <label htmlFor="dob" className="form-label">
                   Address
                  </label>
                  <input
                   required
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    required
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="form-control"
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
export default FindAadhaar;
