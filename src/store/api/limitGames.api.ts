import { IGame } from "../../types/game.types";
import api from "./api";

const limitGamesApi = api.injectEndpoints({
   endpoints: (builder) => ({
      limitGames: builder.query<IGame[], { start: number; end: number }>({
         query: (limit) => `/?_start=${limit.start}&_end=${limit.end}`,
      }),
   }),
});

export const { useLimitGamesQuery } = limitGamesApi;
export default limitGamesApi;
