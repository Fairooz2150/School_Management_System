import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as libraryAPI from "../api/libraryAPI";

// Fetch library history
export const fetchLibraryHistory = createAsyncThunk(
  "library/fetchLibraryHistory",
  async () => {
    return await libraryAPI.fetchLibraryHistory();
  }
);

// Add a new library record


export const addRecord = createAsyncThunk(
  "library/addRecord",
  async (newRecord, thunkAPI) => {
    try {
      const response = await libraryAPI.addLibraryRecord(newRecord);
      return response.data; // Returns the added record
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



// Delete a library record
export const deleteRecord = createAsyncThunk(
  "library/deleteRecord",
  async (id) => {
    return await libraryAPI.deleteLibraryRecord(id);
  }
);

const librarySlice = createSlice({
  name: "library",
  initialState: {
    libraryHistory: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch library history
      .addCase(fetchLibraryHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLibraryHistory.fulfilled, (state, action) => {
        state.libraryHistory = action.payload;
        state.loading = false;
      })
      .addCase(fetchLibraryHistory.rejected, (state) => {
        state.loading = false;
      })
      // Add a new record
      .addCase(addRecord.fulfilled, (state, action) => {
        state.libraryHistory.push(action.payload); // Add the new record to state
      })
      // Delete a record
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.libraryHistory = state.libraryHistory.filter(
          (record) => record.id !== action.payload.id // Remove the deleted record from state
        );
      });
  },
});

export default librarySlice.reducer;
