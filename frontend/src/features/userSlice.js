import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from "../api/userAPI";
import * as registerUserAPI from "../api/authAPI";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return await userAPI.fetchUsers();
});

// Async Thunk to add a new user
export const addUser = createAsyncThunk("users/addUser", async (user) => {
  return await registerUserAPI.registerUser(user);
});

//  Delete a user
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    return await userAPI.deleteUser(userId);
  }
);

// Update a user's details (for editing)
export const editUser = createAsyncThunk("users/editUser", async (user) => {
  return await userAPI.editUser(user);
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Set the fetched users in state
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error
      })

      // Add New User
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // Add the new user to the list
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error
      })

      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(
          (user) => user.id !== action.payload.id
        ); // Remove the deleted user
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error
      })

      // Edit User
      .addCase(editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload; // Update the user data
        }
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error
      });
  },
});

export default userSlice.reducer;
