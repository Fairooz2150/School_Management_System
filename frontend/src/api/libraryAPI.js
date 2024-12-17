import axios from "axios";

// API_URL
const API_URL = "http://localhost:5000/api/library";

// Function to get the stored token
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  return {
    Authorization: `Bearer ${token}`, // Attach token in Authorization header
  };
};


// Fetch all library records
export const fetchLibraryHistory = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(), // Attach Authorization header
    });
    return response.data; // Returns the list of library records
  } catch (error) {
    console.error("Error fetching library history:", error);
    throw error; // Handle errors
  }
};

// Add a new library record



export const addLibraryRecord = async (recordData) => {
  try {
    const response = await axios.post(API_URL, recordData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data; // Ensure this returns the created record
  } catch (error) {
    console.error("Error adding library record:", error);
    throw error;
  }
};



// Update an existing library record
export const updateLibraryRecord = async (id, recordData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, recordData, {
      headers: getAuthHeaders(), // Attach Authorization header
    });
    return response.data; // Returns the updated record
  } catch (error) {
    console.error("Error updating library record:", error);
    throw error; // Handle errors
  }
};

// Delete a library record
export const deleteLibraryRecord = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: getAuthHeaders(), // Attach Authorization header
    });
    return response.data; // Returns the deleted record data or a confirmation
  } catch (error) {
    console.error("Error deleting library record:", error);
    throw error; // Handle errors
  }
};
