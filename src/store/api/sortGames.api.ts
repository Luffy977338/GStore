import { IGame } from "../../types/game.types";
import api from "./api";

export const sandboxApi = api.injectEndpoints({
   endpoints: (builder) => ({
      sortGames: builder.query<IGame[], string>({
         query: (genre) => `/?genre=${genre}`,
      }),
   }),
});

export const { useSortGamesQuery } = sandboxApi;
export default sandboxApi;
