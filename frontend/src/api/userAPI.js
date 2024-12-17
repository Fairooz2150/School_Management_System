import axios from "axios";

const API_URL = "http://localhost:5000/api/users"; // Replace with your actual API URL

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data; // Returns the list of users
};

// Add a new user
export const addUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data; // Returns the added user
};

// Update an existing user
export const editUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}/${id}`, userData);
  return response.data; // Returns the updated user
};

// Delete a user by ID
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data; // Returns the response after deletion (usually the ID of the deleted user)
};
