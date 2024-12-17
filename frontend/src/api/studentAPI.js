import axios from "axios";

const API_URL = "http://localhost:5000/api/students";

// Helper function to get the token
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

// Fetch all students
export const fetchStudents = async () => {
  const response = await axios.get(API_URL, {
    headers: getAuthHeader(), // Attach token to headers
  });
  return response.data;
};

// Add a new student
export const addStudent = async (studentData) => {
  const response = await axios.post(API_URL, studentData, {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(), 
    },
  });
  return response.data;
};

// Update a student
export const updateStudent = async (id, studentData) => {
  const response = await axios.put(`${API_URL}/${id}`, studentData, {
    headers: getAuthHeader(),
  });
  return response.data;
};

// Delete a student
export const deleteStudent = async (studentId) => {
  const response = await axios.delete(`${API_URL}/${studentId}`, {
    headers: getAuthHeader(), 
  });
  return response.data;
};
