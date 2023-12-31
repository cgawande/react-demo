import axios from "axios";
import { Api } from "../component/axios/Axios";
import { useDispatch, useSelector } from "react-redux";

export default async function displayRazorpay(amount, name, email, contact,walletBalance) {
 
  try {

    const data = await Api.post(
      "/payment",
      { amount: amount, currency: "INR" }
    );
    const resp = data.data.data;
    console.log(resp);
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
            amount: amount
          };

          const result = await Api.post(
         "/payment/verify",
            option
          );
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
        
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: contact,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (err) {}
}
