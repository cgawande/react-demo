import axios from "axios";




export default async function displayRazorpay(amount,name,email,contact ) {
  try{
    console.log(amount,name,email,contact)
  const data = await axios.post("https://backendsp.onrender.com/api/v1/payment", {amount:amount,currency:"INR"}
  )
  const resp=data.data.data

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
        };

        const result = await axios.post(
          "https://backendsp.onrender.com/api/v1/payment/verify",
          option
        );
       alert(result.data.data.value)
        let res = await axios.get(
          `https://backendsp.onrender.com/api/v1/payments/${response.razorpay_payment_id}`
        );
        if (res?.data?.data?.status === "captured") {
          alert("payment successful");
          window.location.href = "https://sponlineservices.netlify.app/user"
        }
      }
    },
    prefill: {
      name:name,
      email: email,
      contact: contact,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}catch(err){

}
}
