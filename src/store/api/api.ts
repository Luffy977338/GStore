import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGame } from "../../types/game.types";

const API_URL = "http://localhost:3200/games";

export const api = createApi({
   reducerPath: "api",
   tagTypes: ["Games"],
   baseQuery: fetchBaseQuery({
      baseUrl: API_URL,
   }),
   endpoints: (builder) => ({
      getGames: builder.query<IGame[], null>({
         query: () => `/`,
      }),
   }),
});

export const { useGetGamesQuery } = api;
export default api;
