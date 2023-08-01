import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IGame } from "../../types/game.types";
import st from "./cart-item.module.scss";
import { useActions } from "../../hooks/useActions";
import { useSaved } from "../../hooks/useSaved";

interface ICartItem {
   game: IGame;
}

const CartItem = ({ game }: ICartItem) => {
   const { addGame, removeGame } = useActions();
   const saved = useSaved();
   const [isHover, setIsHover] = React.useState<boolean>(false);
   const [isClicked, setIsClicked] = React.useState<boolean>(false);
   const isAdded = saved.some((g) => g.id === game.id);

   const handleAdd = () => {
      setIsHover(true);
      setIsClicked(true);
      addGame(game);
   };

   const handleRemove = () => {
      setIsClicked(false);
      removeGame(game);
   };

   const motionWidth = {
      from: {
         width: 143,
      },
      to: {
         width: 224,
      },
   };

   return (
      <motion.div
         whileHover={{ transform: "translateY(-5px)" }}
         transition={{ duration: 0.25 }}
         className={st.cart__bar}
      >
         <div className={st.img__wrap}>
            <img className={st.img} src={game.img} alt='gameImg' />
         </div>
         <div className={st.info}>
            <div className={st.info__name}>{game.name}</div>
            <div className={st.info__price}>
               {game.price === 0 ? "Free" : `${game.price} ₽`}
            </div>
         </div>
         <div className={st.cart__button}>
            {isAdded ? (
               <motion.button
                  initial={isClicked ? "from" : ""}
                  animate='to'
                  variants={motionWidth}
                  transition={{ ease: "easeInOut", duration: 0.1 }}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  className={st.cart__button_added}
                  onClick={() => handleRemove()}
               >
                  {isHover ? "Удалить" : "Добавленно"}
               </motion.button>
            ) : (
               <motion.button
                  initial={isClicked ? "to" : ""}
                  animate='from'
                  variants={motionWidth}
                  transition={{ duration: 0.1 }}
                  className={st.cart__button_add}
                  onClick={() => handleAdd()}
               >
                  В корзину
               </motion.button>
            )}
         </div>
      </motion.div>
   );
};

export default CartItem;
