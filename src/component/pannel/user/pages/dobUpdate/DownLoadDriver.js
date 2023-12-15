import React from 'react'
import UserSidebar from '../../UserSidebar'

function DownLoadDriver() {
  return (
    <>
          <div className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div   className="col-sm-2 p-0 m-0"
            style={{
              height: "100vh",
              overflowY: "auto",
              position: "sticky",
              top: 0,
            }}>
            <UserSidebar/>
          </div>
          <div className="col-sm-2 "></div>
          <div className="col-sm-5">
            <div className="container mt-5">
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
      </div>
    </>
  )
}

export default DownLoadDriver
