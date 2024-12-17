import axios from "axios";

// Set the backend base URL
const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
