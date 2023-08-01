import React from "react";
import CartItem from "../cart-item/CartItem";
import { useGetGamesQuery } from "../../store/api/api";
import { IGame } from "../../types/game.types";
import Loader from "../loader/Loader";
import { useFilter } from "../../hooks/useFilter";
import { useQuery } from "../../hooks/useQuery";
import { useLimitGamesQuery } from "../../store/api/limitGames.api";
import { useLimit } from "../../hooks/useLimit";
import Cart from "../cart/Cart";
import { useActions } from "../../hooks/useActions";

const SortAll = () => {
   const limit = useLimit();
   const actions = useActions();
   const query = useQuery();

   React.useEffect(() => {
      actions.changePage(1);
   }, []);

   const { isLoading: isGamesLoading, data: dataGames } =
      useGetGamesQuery(null);

   const searchGamesData = useFilter(dataGames, query.query);

   const { isLoading: isLimitGamesLoading, data: dataLimitGames } =
      useLimitGamesQuery({ start: limit.start, end: limit.end });

   return (
      <Cart data={dataGames}>
         <div>
            {query.query.length > 0 ? (
               <div>
                  {isGamesLoading ? (
                     <div>
                        <Loader />
                     </div>
                  ) : dataGames ? (
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
                  {isLimitGamesLoading ? (
                     <div>
                        <Loader />
                     </div>
                  ) : dataLimitGames ? (
                     <div className='grid grid-cols-4 place-items-center gap-x-4 gap-y-24 px-[200px]'>
                        {dataLimitGames.map((game: IGame) => (
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

export default SortAll;
