import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: "kumar",
  reducers: {
    saveUser: (state, action) => "-" + state + action.payload,
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
