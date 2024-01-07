import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";

const VoterNameDownloadSlip = () => {
 

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
                    <h2 className="mb-4">Download Slip</h2>

                    <button type="submit" className="btn btn-primary">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default VoterNameDownloadSlip;
