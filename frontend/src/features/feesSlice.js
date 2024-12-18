import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as feesAPI from "../api/feesAPI";

// Fetch all fees history
export const fetchFeesHistory = createAsyncThunk(
  "fees/fetchFeesHistory",
  async () => {
    return await feesAPI.fetchFeesHistory();
  }
);

// Add a new fee record
export const addFeesRecord = createAsyncThunk(
  "fees/addFeeRecord",
  async (feeData) => {
    return await feesAPI.addFeesRecord(feeData);
  }
);

// Delete a fee record
export const deleteFeeRecord = createAsyncThunk(
  "fees/deleteFeeRecord",
  async (id) => {
    return await feesAPI.deleteFeesRecord(id);
  }
);

// Update an existing fee record
export const updateFeeRecord = createAsyncThunk(
  "fees/updateFeeRecord",
  async (feeData) => {
    return await feesAPI.updateFeesRecord(feeData);
  }
);

const feesSlice = createSlice({
  name: "fees",
  initialState: {
    feesHistory: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeesHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeesHistory.fulfilled, (state, action) => {
        state.feesHistory = action.payload;
        state.loading = false;
      })
      .addCase(fetchFeesHistory.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addFeesRecord.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFeesRecord.fulfilled, (state, action) => {
        state.feesHistory.push(action.payload);  // Add the new record to the state
        state.loading = false;
      })
      .addCase(addFeesRecord.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteFeeRecord.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFeeRecord.fulfilled, (state, action) => {
        state.feesHistory = state.feesHistory.filter(
          (record) => record.id !== action.payload.id // Remove the deleted record from the state
        );
        state.loading = false;
      })
      .addCase(deleteFeeRecord.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateFeeRecord.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateFeeRecord.fulfilled, (state, action) => {
        const index = state.feesHistory.findIndex(
          (record) => record.id === action.payload.id
        );
        if (index !== -1) {
          state.feesHistory[index] = action.payload; // Update the record in the state
        }
        state.loading = false;
      })
      .addCase(updateFeeRecord.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default feesSlice.reducer;
