import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";



const FindVoterProcessing = () => {
  const [formData, setFormData] = useState({
otp: "",

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
  
    getDobData(formData);
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
                  <div className="border rounded p-3">
                    <h2 className="mb-4">Processing</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Enter OTP
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="otp"
                          name="otp"
                          required
                          placeholder="Enter six digit otp"
                          value={formData.otp}
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
export default FindVoterProcessing;
