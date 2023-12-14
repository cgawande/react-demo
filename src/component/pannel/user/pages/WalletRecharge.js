import { useEffect, useState } from "react";
import Sidebar from "../UserSidebar";
import UserHeader from "../UserHeader";
import displayRazorpay from "../../../../utils/paymentGetway";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../axios/Axios";
import { updateAmount } from "../../../redux/comUpSlice";
import { ToastContainer, toast } from "react-toastify";

const WalletRecharge = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.compUpSlice);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [payment, setWalletBalance] = useState();

  useEffect(() => {
    dispatch(updateAmount(payment));
  }, [amount, payment]);

  const handlePayment = async () => {
    setIsLoading(true);
    if (payment >= 100) {
      console.log("useEffect Graeater than 100", payment);
    } else {
     alert("minimum amount is INR 100 ")
     console.log("useEffect than --100", payment);
     setIsLoading(false)
     return;
    }
    dispatch(updateAmount(payment));

    setIsLoading(true);
    try {
      if (amount) {
        dispatch(updateAmount(payment));
        console.log("length", payment.length);
        navigate("/payment-getway")
        console.log("if amount", amount);
      }
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div className="col-sm-2 p-0 m-0" style={{border:"1px solid black", height:"100vh"}}>
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
                    required
                    style={{ width: "200px" }}
                    className="form-control mx-3"
                    placeholder="enter amount"
                    onChange={(e) => {
                      setWalletBalance(e.target.value);
                    }}
                  />

                  <button
                    onClick={handlePayment}
                    className="btn customBtn"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Recharge Now"}
                  </button>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};
export default WalletRecharge;
