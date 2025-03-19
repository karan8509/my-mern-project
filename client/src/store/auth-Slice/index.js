import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isLoding: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuth: (state, action) => {},
  },
});

export const { userAuth } = authSlice.actions;
export default authSlice.reducer;
