import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import UserHeader from "../UserHeader";
import displayRazorpay from "../../../../utils/paymentGetway";

const WalletRecharge = () => {
  const [paymentAmount, setPaymentAmount] =useState()
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div className="col-sm-2 p-0 m-0">
            <Sidebar />
          </div>
          <div className="col-sm-10">
            <UserHeader />
            <div>
              <form className="row g-3">
                <div className="col-auto">
                  <label htmlFor="staticEmail2" className="visually-hidden">
                
                  </label>
                  <input
                    type="number"
                    readOnly=""
                    className=""
                    id="staticEmail2"
                    onChange={(e)=>{ setPaymentAmount(e.target.value)}}
                    defaultValue="email@example.com"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="inputPassword2" className="visually-hidden">
                    Payment Amount
                  </label>
                  <input
                    type="password"
                    id="staticEmail2"
                    onChange={(e)=>{ setPaymentAmount(e.target.value)}}
                    className="form-control"
           
                    placeholder="Password"
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" onClick={()=> displayRazorpay(paymentAmount)} className="btn btn-primary mb-3">
                    Recharge Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WalletRecharge;
