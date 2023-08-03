import React from "react";
import { useSaved } from "../../hooks/useSaved";
import FinallyBasketItem from "../finally-basket-item/FinallyBasketItem";
import { IGame } from "../../types/game.types";

const FinallyBasket = () => {
   const game = useSaved();

   const totalPrice = game.reduce((acc: any, game: IGame) => {
      return acc + game.totalPrice;
   }, 0);

   return (
      <main className='my-[150px]'>
         <div>
            {game.map((game) => (
               <FinallyBasketItem game={game} />
            ))}
         </div>
         <p className='ml-80 text-4xl font-bold mt-20 mb-10'>
            Total:{" "}
            <span className='text-3xl font-semibold'>{totalPrice} ₽</span>
         </p>
         <div className='text-center py-4 bg-red-600 text-2xl rounded-full cursor-pointer transition-colors duration-200 font-bold mx-[250px] hover:bg-red-700'>
            <button className='tracking-[2px]'>Оформить</button>
         </div>
      </main>
   );
};

export default FinallyBasket;
