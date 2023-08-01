import { IGame } from "../../types/game.types";
import api from "./api";

export const limitSortGamesApi = api.injectEndpoints({
   endpoints: (builder) => ({
      limitSortGames: builder.query<
         IGame[],
         { genre: string; start: number; end: number }
      >({
         query: (game) =>
            `/?genre=${game.genre}&_start=${game.start}&_end=${game.end}`,
      }),
   }),
});

export const { useLimitSortGamesQuery } = limitSortGamesApi;
export default limitSortGamesApi;
