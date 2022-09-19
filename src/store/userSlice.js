import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: "kumar",
  reducers: {
    saveUser: (state, action) => "-" + state + action.payload,
  },
});
