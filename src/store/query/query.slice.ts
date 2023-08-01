import { createSlice } from "@reduxjs/toolkit";

const initialState = { query: "", type: "" };

const querySlice = createSlice({
   name: "query",
   initialState,
   reducers: {
      changeQuery: (state, action) => {
         state.query = action.payload;
      },
      changeType: (state, action) => {
         state.type = action.payload;
      },
   },
});

export const { actions, reducer } = querySlice;
export default querySlice;
