import axios from 'axios';
import Cookies from 'js-cookie';

// Function to get the authentication token from cookies
const getAuthToken = () => {
  return Cookies.get("token") || ''; // Return an empty string if the token is not present
};

// Create an instance of Axios with a custom configuration
export const Api = axios.create({
  baseURL: 'https://backendsp.onrender.com/api/v1',
  // baseURL: 'http://localhost:8088/api/v1',
   // Set your base URL here
  // You can also add other default configurations if needed
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json',
  },
});

// Interceptor to update the token before each request
Api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getAuthToken()}`;
  return config;
});

// Interceptor to handle response errors (example: token expiration)
Api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here, e.g., refresh token or redirect to login page
    return Promise.reject(error);
  }
);
