import React from "react";
import { useSortGamesQuery } from "../../store/api/sortGames.api";
import CartItem from "../cart-item/CartItem";
import { IGame } from "../../types/game.types";
import Loader from "../loader/Loader";
import { useFilter } from "../../hooks/useFilter";
import { useQuery } from "../../hooks/useQuery";
import Cart from "../cart/Cart";
import { useActions } from "../../hooks/useActions";
import { useLimit } from "../../hooks/useLimit";
import { useLimitSortGamesQuery } from "../../store/api/limitSortGames.api";

interface ISortGames {
   type: string;
}

const SortGames = ({ type }: ISortGames) => {
   const query = useQuery();
   const limit = useLimit();
   const actions = useActions();
   const { isLoading: isSortGamesLoading, data: dataSortGames } =
      useSortGamesQuery(type);

   const { isLoading: isLimitSortGamesLoading, data: dataLimitSortGames } =
      useLimitSortGamesQuery({
         genre: type,
         start: limit.start,
         end: limit.end,
      });

   React.useEffect(() => {
      actions.changePage(1);
   }, []);

   const searchGamesData = useFilter(dataSortGames, query.query);
   return (
      <Cart data={dataSortGames}>
         <div>
            {query.query.length > 0 ? (
               <div>
                  {isSortGamesLoading ? (
                     <div>
                        <Loader />
                     </div>
                  ) : dataSortGames ? (
                     <div className='grid grid-cols-4 place-items-center gap-x-4 gap-y-24 px-[200px]'>
                        {searchGamesData.map((game: IGame) => (
                           <CartItem key={game.id} game={game} />
                        ))}
                     </div>
                  ) : (
                     <div>Data not found</div>
                  )}
               </div>
            ) : (
               <div>
                  {isLimitSortGamesLoading ? (
                     <div>
                        <Loader />
                     </div>
                  ) : dataLimitSortGames ? (
                     <div className='grid grid-cols-4 place-items-center gap-x-4 gap-y-24 px-[200px]'>
                        {dataLimitSortGames.map((game: IGame) => (
                           <CartItem key={game.id} game={game} />
                        ))}
                     </div>
                  ) : (
                     <div>Data not found</div>
                  )}
               </div>
            )}
         </div>
      </Cart>
   );
};

export default SortGames;
