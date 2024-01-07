import { useEffect, useState } from "react";
import Sidebar from "../UserSidebar";
import UserHeader from "../UserHeader";
import displayRazorpay from "../../../../utils/paymentGetway";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../axios/Axios";
import { updateAmount } from "../../../redux/comUpSlice";
import { ToastContainer, toast } from "react-toastify";
import styles from "../Sidebar.module.css";
import axios from "axios";
const WalletRecharge = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.compUpSlice);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [payment, setWalletBalance] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    dispatch(updateAmount(payment));
  }, [amount, payment]);
  useEffect(() => {
    getbalance();
  }, [balance]);

  const getbalance = async () => {
    const res =await Api.get("/wallet");
    setBalance(res.data.balance);
  };

  const handlePayment = async () => {
    setIsLoading(true);
    if (payment >= 100) {
      console.log("useEffect Graeater than 100", payment);
    } else {
      alert("minimum amount is INR 100 ");
      console.log("useEffect than --100", payment);
      setIsLoading(false);
      return;
    }
    dispatch(updateAmount(payment));

    setIsLoading(true);
    try {
      if (amount) {
        dispatch(updateAmount(payment));
        console.log("length", payment.length);
        navigate("/payment-getway");
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
      <div className="row my-3">

        <div className="col-sm-6">
          <div className="d-flex align-items-center">
            <label className="form-label">Amount</label>
            <input
              type="number"
              required
              style={{ width: "200px" }}
              className="form-control removeNumberIcon mx-3"
              placeholder="enter amount"
              onChange={(e) => {
                setWalletBalance(e.target.value);
              }}
            />

            <button
              onClick={handlePayment}
              className="btn btn-primary"
              disabled={isLoading}
            >

              {isLoading ? "Processing..." : "Recharge Now"}
            </button>         
          </div>
        </div>
        <div className="col-sm-6">
        <label className="form-label">Your available balance is : {balance}</label>
        </div>
      </div>
    </>
  );
};
export default WalletRecharge;
