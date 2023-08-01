import React from "react";
import { IGame } from "../../types/game.types";
import st from "./basket-item.module.scss";
import { BsTrash3 } from "react-icons/bs";
import { useActions } from "../../hooks/useActions";

interface IBasketItem {
   savedGame: IGame;
}

const BasketItem = ({ savedGame }: IBasketItem) => {
   const { removeGame } = useActions();

   return (
      <div className={st.game__wrap}>
         <div>
            <img className={st.game__img} src={savedGame.img} alt='' />
         </div>
         <div className={st.game__info}>
            <div className={st.game__info_name}>{savedGame.name}</div>
            <div className={st.game__info_price}>
               {savedGame.price === 0 ? "Free" : `${savedGame.price} ₽`}
            </div>
         </div>
         <div className={st.game__remove}>
            <button
               onClick={() => removeGame(savedGame)}
               className={st.game__remove_button}
            >
               <BsTrash3 className='text-2xl' />
            </button>
         </div>
      </div>
   );
};

export default BasketItem;
