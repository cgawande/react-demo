// Import Axios library
import axios from 'axios';
import Cookies from 'js-cookie';
let authToken=Cookies.get("token")
// Create an instance of Axios with a custom configuration
export  const Api = axios.create({
  baseURL: 'https://backendsp.onrender.com/api/v1', // Set your base URL here
  // You can also add other default configurations if needed
 
  headers: {
    Authorization: `Bearer ${authToken}`, // Include the authorization token in the headers
    'Content-Type': 'application/json', // You can add other headers if needed
  },
});

