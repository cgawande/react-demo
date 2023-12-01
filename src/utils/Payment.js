import React, { useEffect } from "react";

import displayRazorpay from "./paymentGetway";

const App = () => {
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
    <div>
        <button
          type="button"
          onClick={displayRazorpay(10)}
          className="btn btn-primary"
        >
          Buy Now
        </button>
    </div>
  );
};

export default App;
