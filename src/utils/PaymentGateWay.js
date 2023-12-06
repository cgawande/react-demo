import { useEffect, useState } from "react";
import { Api } from "../component/axios/Axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentGateWay = () => {
  const { user } = useSelector((state) => state.login);
  const { amount } = useSelector((state) => state.compUpSlice); //recharge Amount
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [isLoader, setLoader] = useState(false);

  // const [amount, setWalletBalance] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    if (user) {
      setName(user?.fullName);
      setEmail(user?.email);
      setContact(user?.phoneNumber);
    }
  }, [user]);

  useEffect(() => {
    setLoader(true);
    if (name && contact && amount && email) {
      displayRazorpay();
    }
  }, [user, name, email, contact]);

  async function displayRazorpay() {
    try {
      const data = await Api.post("/payment", {
        amount: amount,
        currency: "INR",
      });
      const resp = data.data.data;

      const options = {
        key: "rzp_test_dv3hsJ5Ue3U5gl",
        currency: resp.currency,
        amount: resp.amount,
        name: "SP Services Online",
        description: "Wallet Transaction",
        image: "http://localhost:8088/logo.png",
        order_id: resp.id,
        callback_url: "https://sponlineservices.netlify.app/user",
        callback_method: "get",
        handler: async function (response) {
          if (response) {
            const option = {
              orderCreationId: resp.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              amount: amount,
            };

            const result = await Api.post("/payment/verify", option);
            // let res = await Api.get(
            //   `/payments/${response.razorpay_payment_id}`
            // );
            //if (res?.data?.data?.status === "captured") {
            // alert("payment successful");
            // await Api.post(
            //   `/transaction/${resp.transactionId}`,
            //   { status: "completed" }
            // );
            // await Api.post(
            //   `/add-wallet`,
            //   { amount: amount }
            // );
            //  window.location.href = "https://sponlineservices.netlify.app/user";
            navigate("/user");
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        modal: {
          ondismiss: function() {
            navigate("/user");
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      setLoader(false);
    } catch (err) {}
  }

  return (
    <>
      {isLoader && (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div class="d-flex text-primary justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      {/* {!isLoader && (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div class="d-flex text-primary justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};
export default PaymentGateWay;
