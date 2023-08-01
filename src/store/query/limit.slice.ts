import { createSlice } from "@reduxjs/toolkit";

const initialState = { page: 1, start: 0, end: 20 };

const limitSlice = createSlice({
   name: "limit",
   initialState,
   reducers: {
      changePage: (state, action) => {
         const pageNumber = action.payload;
         state.page = pageNumber;
         state.start = (pageNumber - 1) * 20;
         state.end = pageNumber * 20;
         window.scrollTo({ top: 0 });
      },
   },
});

export const { actions, reducer } = limitSlice;
export default limitSlice;
