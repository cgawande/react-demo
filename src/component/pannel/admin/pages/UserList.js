import React, { useEffect, useState } from 'react'
import AdminSidebar from '../Sidebar'
import Header from '../Header'
import { Api } from '../../../axios/Axios'

function UserList() {
    const[users,setusers]=useState([])
    const [isLoader,setIsLoader] = useState(false)
useEffect(()=>{
userList()
},[])

const userList = async()=>{
    setIsLoader(true)
    try {
        let res= await Api("/users")
    //    console.log(res.data.data.users.fullname)
        setusers(res.data.data.users)

        setIsLoader(false)
    } catch (error) {
        setIsLoader(false)
    }
}

// console.log(users)
  return (
    <>
    <div className="container-fluid p-0">
    <div className="row p-0 m-0">
       <div className="col-sm-2 p-0 m-0">
          <AdminSidebar/>
       </div>
       <div className="col-sm-10 p-0 m-0">
            <Header/>
       <div className="container mt-4">
      <h2 className="text-center mb-4">User Information</h2>
{isLoader && (
    <div className="text-center">
    <>
      <button
        className="btn btn-primary"
        type="button"
        disabled=""
      >
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </button>
    </>

    {/* {alert("Please  wait")} */}
  </div>
)}

      {!isLoader&&(
      <div className="table-responsive">

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email ID</th>
              <th>Wallet Balance</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>{
                return (
                    <tr>
                    <td>{user.fullName}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.email}</td>
                    <td>$500.00</td>
                    <td>{user.isActive?"Active":"Restrict"}</td>
                  </tr>
                )
            })}
           
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      )}
    </div>
        </div>
    
    </div>
 </div>
 </>
  )
}

export default UserList
