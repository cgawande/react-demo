import React, { useState } from "react";
import { Api } from "../../../../../../axios/Axios";
import WalletRecharge from "../../../WalletRecharge";

const DobProcessingReq = () => {
  const [amount, setAmount] = useState();


  const handleChange = (e) => {
setAmount(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getDobData(amount);
  };

  const getDobData = async (amount) => {
    try {
      const res = await Api.post("/product/payment", {amount:amount}, {
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
            <div className="border  rounded p-3">
              <h2 className="mb-4">Payment Form</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
               
                    required
                    value={200}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Mavke Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DobProcessingReq;
