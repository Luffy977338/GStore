import { createSlice } from "@reduxjs/toolkit";
import { IGame } from "../../types/game.types";

const initialState: IGame[] = [];

const savedSlice = createSlice({
   name: "saved",
   initialState,
   reducers: {
      addGame: (state, action) => {
         const isExist = state.some((r) => r.id === action.payload.id);
         if (isExist) {
            return;
         } else {
            state.push(action.payload);
         }
      },
      removeGame: (state, action) => {
         const index = state.findIndex((game) => game.id === action.payload.id);
         if (index !== -1) {
            state.splice(index, 1);
         }
      },
   },
});

export const { actions, reducer } = savedSlice;
export default savedSlice;
