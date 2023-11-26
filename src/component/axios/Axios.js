// Import Axios library
import axios from 'axios';

// Create an instance of Axios with a custom configuration
export  const Api = axios.create({
  baseURL: 'https://backendsp.onrender.com/api/v1', // Set your base URL here
  // You can also add other default configurations if needed
 
 
});

