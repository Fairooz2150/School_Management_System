import axios from "axios";

const API_URL = "http://localhost:5000/api/fees";

export const fetchFeesHistory = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addFeesRecord = async (feesData) => {
  const response = await axios.post(API_URL, feesData);
  return response.data;
};

export const updateFeesRecord = async (id, feesData) => {
  const response = await axios.put(`${API_URL}/${id}`, feesData);
  return response.data;
};

export const deleteFeesRecord = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
