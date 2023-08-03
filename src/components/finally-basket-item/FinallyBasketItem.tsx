import React from "react";
import st from "./finally-basket-item.module.scss";
import { IGame } from "../../types/game.types";
import { BsTrash3 } from "react-icons/bs";
import { useActions } from "../../hooks/useActions";

interface IFinallyBasketItem {
   game: IGame;
}

const FinallyBasketItem = ({ game }: IFinallyBasketItem) => {
   const { removeGame, countIncrement, countDecrement } = useActions();

   return (
      <div className='flex items-center justify-between mx-16 px-16 border-b border-white last-of-type:border-none mb-16 pb-16'>
         <div>
            <img className='h-[286px] w-[286px]' src={game.img} alt='' />
         </div>
         <div className='text-4xl w-[700px] text-center'>{game.name}</div>
         <div className='text-4xl text-center w-[300px]'>
            {game.price === 0 ? "Free" : `${game.totalPrice} ₽`}
         </div>
         <div className='flex items-center'>
            {game.count === 1 ? (
               <button onClick={() => removeGame(game)} className={st.counter}>
                  <BsTrash3 className='text-2xl' />
               </button>
            ) : (
               <button
                  className={st.counter}
                  onClick={() => countDecrement(game)}
               >
                  <span> </span>
               </button>
            )}
            <div className='w-[26px] text-center mr-3 ml-4 text-xl'>
               {game.count}
            </div>
            <button className={st.counter} onClick={() => countIncrement(game)}>
               <span className=' after:rotate-90 after:block after:w-[20px] after:h-[3px] after:bg-white after:content-[  ]'>
                  {" "}
               </span>
            </button>
         </div>
      </div>
   );
};

export default FinallyBasketItem;
