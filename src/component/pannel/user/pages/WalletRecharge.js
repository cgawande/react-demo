import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import UserHeader from "../UserHeader";
import displayRazorpay from "../../../../utils/paymentGetway";
import { useSelector } from "react-redux";

const WalletRecharge = () => {
  const { user } = useSelector((state) => state.login);
  const [paymentAmount, setPaymentAmount] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.fullName) {
      setName(user?.fullName);
      setEmail(user?.email);
      setContact(user?.phoneNumber);
    }
  }, [user]);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      await displayRazorpay(paymentAmount, name, email, contact);
      // handle any post-payment loading states or redirects here
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
                    required
                    style={{ width: "200px" }}
                    className="form-control mx-3"
                    placeholder="enter amount"
                    onChange={(e) => {
                      setPaymentAmount(e.target.value);
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
      </div>
    </>
  );
};
export default WalletRecharge;
