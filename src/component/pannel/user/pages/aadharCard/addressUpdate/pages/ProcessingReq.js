import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";
import WalletRecharge from "../../../WalletRecharge";




const AddressProcessingReq=()=>{
   
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
   
                    <WalletRecharge/>
          
        </>
    )
}
export default AddressProcessingReq