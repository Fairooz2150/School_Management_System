import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as libraryAPI from "../api/libraryAPI";

export const fetchLibraryHistory = createAsyncThunk("library/fetchLibraryHistory", async () => {
  return await libraryAPI.fetchLibraryHistory();
});

export const addRecord = createAsyncThunk("library/addRecord", async (newRecord) => {
  return await libraryAPI.addLibraryRecord(newRecord);
});

export const updateRecord = createAsyncThunk("library/updateRecord", async ({ id, data }) => {
  return await libraryAPI.updateLibraryRecord(id, data);
});

export const deleteRecord = createAsyncThunk("library/deleteRecord", async (id) => {
  return await libraryAPI.deleteLibraryRecord(id);
});

const librarySlice = createSlice({
  name: "library",
  initialState: { libraryHistory: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibraryHistory.fulfilled, (state, action) => {
        state.libraryHistory = action.payload;
      })
      .addCase(addRecord.fulfilled, (state, action) => {
        state.libraryHistory.push(action.payload);
      })
      .addCase(deleteRecord.fulfilled, (state, action) => {
        state.libraryHistory = state.libraryHistory.filter((r) => r._id !== action.payload.id);
      });
  },
});

export default librarySlice.reducer;
