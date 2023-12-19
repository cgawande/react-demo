import React, { useState } from "react";

const AdvanceAadhar = () => {
  const [formData, setFormData] = useState({
    aadharNO: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-8 ">
          <div className="container mt-5 offset-2">
            <div className="border rounded p-3">
              <h2 className="mb-4">Advance Aadhar</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Enter Your 12 Digit Aadhar Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter Your 12 Digit Aadhar Number"
                    value={formData.aadharNO}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
             Capture
                </button>
                <p></p>
                <p>
                ध्यान दें 1. अगर डाटा एक बार में नहीं आता है तो दुबारा कैप्चर
                करे डाटा आ जायेगा 2. इस फंक्शन में सारे डिवाइस ऑटोमेटिक काम करते
                है और सारे डिवाइस सपोर्ट करते है!</p>
                <p> Notice : 1. If the data does
                not come at once, then the data will be captured again 2. In
                this function all the devices work automatically and all the
                devices are supported
              </p>
              </form>
            </div>
           
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 p-3">
        <div>
           
            </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceAadhar;
