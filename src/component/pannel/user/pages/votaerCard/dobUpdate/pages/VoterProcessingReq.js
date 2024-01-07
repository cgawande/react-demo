import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";
import WalletRecharge from "../../../WalletRecharge";


const VoterDobProcessingReq=()=>{
   
    const [formData, setFormData] = useState({
      firstName: "",
      phoneNumber: "",
 
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

    return(
        <>
 <div className="row">
              <div className="col-sm-5 offset-3">
                <div className="container my-5">
                  <div className="border  rounded p-3">
                    <h2 className="mb-4">Payment Form</h2>
                    <WalletRecharge/>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                     
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
              
               
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}
export default VoterDobProcessingReq