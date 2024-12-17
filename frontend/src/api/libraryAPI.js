import axios from "axios";

const API_URL = "http://localhost:5000/api/library";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  return {
    Authorization: `Bearer ${token}`, // Attach token in Authorization header
  };
};


export const fetchLibraryHistory = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching library history:", error);
    throw error; 
  }
};


export const addLibraryRecord = async (recordData) => {
  try {
    const response = await axios.post(API_URL, recordData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding library record:", error);
    throw error;
  }
};



// Update an existing library record
export const updateLibraryRecord = async (id, recordData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, recordData, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error updating library record:", error);
    throw error; 
  }
};

// Delete a library record
export const deleteLibraryRecord = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: getAuthHeaders(), 
    });
    return response.data; 
  } catch (error) {
    console.error("Error deleting library record:", error);
    throw error;
  }
};
