import React, { useMemo } from "react";
import { IGame } from "../types/game.types";

export const useFilter = (data: any, query: string) => {
   const searchGamesData = useMemo(() => {
      return data?.filter((game: IGame) =>
         game.name.toLowerCase().includes(query),
      );
   }, [query, data]);

   return searchGamesData;
};
