import axios from "axios";

const API_URL = "http://localhost:5000/api/library";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const fetchLibraryHistory = async () => {
  const response = await axios.get(API_URL, { headers: getAuthHeaders() });
  return response.data;
};

export const addLibraryRecord = async (record) => {
  const response = await axios.post(API_URL, record, { headers: getAuthHeaders() });
  return response.data;
};

export const updateLibraryRecord = async (id, recordData) => {
  const response = await axios.put(`${API_URL}/${id}`, recordData, { headers: getAuthHeaders() });
  return response.data;
};

export const deleteLibraryRecord = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, { headers: getAuthHeaders() });
  return response.data;
};
