import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {} from "@reduxjs/toolkit"
// const { createSlice } = require("@reduxjs/toolkit");
// const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
// const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Generate lifecycle methods automatically: pending, fulfilled, and rejected action types

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    });
  // Returning only user IDs, but you could return full user data if needed
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the pending state (loading data)
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    // Handle the fulfilled state (successfully fetched data)
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload; // Store the array of user IDs
      state.error = ""; // Clear any previous error
    });

    // Handle the rejected state (failed request)
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; // Set the error message from the rejected action
    });
  },
});
export default userSlice.reducer;

// module.exports = userSlice.reducer;
// module.exports.fetchUsers = fetchUsers;
