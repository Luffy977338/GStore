import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuth: false };

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      authIn: (state) => {
         state.isAuth = true;
      },
      authOut: (state) => {
         state.isAuth = false;
      },
   },
});

export const { actions, reducer } = authSlice;
export default authSlice;
