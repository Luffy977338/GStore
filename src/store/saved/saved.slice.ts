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
      countIncrement: (state, action) => {
         const { id } = action.payload;
         const game = state.find((game) => game.id === id);
         if (game) {
            if (game.count < 99) {
               game.count += 1;
               game.totalPrice = game.price * game.count;
            }
            return;
         }
      },
      countDecrement: (state, action) => {
         const { id } = action.payload;
         const game = state.find((game) => game.id === id);
         if (game) {
            if (game.count > 1) {
               game.count -= 1;
               game.totalPrice = game.price * game.count;
            }
            return;
         }
      },
   },
});

export const { actions, reducer } = savedSlice;
export default savedSlice;
