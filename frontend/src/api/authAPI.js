import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";


const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};


export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);

  const { token } = response.data;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData,{
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
  });
  return response.data;
};
