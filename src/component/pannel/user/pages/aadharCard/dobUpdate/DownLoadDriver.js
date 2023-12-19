import React from 'react'


function DownLoadDriver() {
  return (
    <>
          <div className="row">
          <div className="col-sm-5">
            <div className="container mt-5 offset-3">
                <div className="border rounded p-3">
              <h2 className="mb-4">Name Application Details</h2>
              <form >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Applicant  Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                   
                  />
                </div>
         
                <div className="mb-3">
                  <label htmlFor="pinCode" className="form-label">
                    Upload Aadhaar
                  </label>                                              
                  <input
                    type="text"
                    className="form-control"
                    id="pinCode"
                    name="pinCode"
               
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default DownLoadDriver
