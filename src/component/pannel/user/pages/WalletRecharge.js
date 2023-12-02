import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import UserHeader from "../UserHeader";
import displayRazorpay from "../../../../utils/paymentGetway";
import { useSelector } from "react-redux";

const WalletRecharge = () => {
  const {user} = useSelector((state)=>state.login)
  const [paymentAmount, setPaymentAmount] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
console.log(user)
console.log("....",user?.fullName)
useEffect(()=>{
  if(user?.fullName){
    setName(user?.fullName)
    setEmail(user?.email)
    setContact(user?.phoneNumber)
  }
},[user])


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
const handlePayClick=()=>{
  displayRazorpay(paymentAmount,name,email,contact)
}
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
            <div className="row my-3">
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                <label>Amount</label>
                <input
                  type="number"
                  // readOnly=""
                  required
                  style={{width:"200px"}}
                  className="form-control mx-3"
                  id="staticEmail2"
                  placeholder="enter amount"
                  onChange={(e) => {
                    setPaymentAmount(e.target.value);
                  }}
                  defaultValue="email@example.com"
                />
                <button 
                  onClick={() => {
                    displayRazorpay(paymentAmount,name,email,contact);
                  }}
                  className="btn customBtn "
                >
                  Recharge Now
                </button>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WalletRecharge;
