import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "auth",
  initialState: {
    userName: "Admin",
  },
  reducers: {},
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
