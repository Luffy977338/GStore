import React from "react";
import { useSaved } from "../../hooks/useSaved";
import BasketItem from "../basket-item/BasketItem";
import st from "./basket-list.module.scss";
import { motion } from "framer-motion";
import EmptyBasket from "../empty-basket/EmptyBasket";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface IBasketList {
   basketImgRef: React.MutableRefObject<HTMLDivElement | null>;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   toastError: (text: string) => void;
}

const BasketList = ({ basketImgRef, setIsOpen, toastError }: IBasketList) => {
   const saved = useSaved();
   const basketRef = React.useRef<HTMLDivElement | null>(null);
   const path = useNavigate();
   const auth = useAuth();

   const handleCheckout = () => {
      if (auth.isAuth) {
         path("/basket");
         setIsOpen(false);
      } else {
         toastError("Вы не авторизованы");
      }
   };

   const handleClickAway = (event: any) => {
      if (
         basketRef.current &&
         !basketRef.current?.contains(event.target) &&
         !basketImgRef.current?.contains(event.target)
      ) {
         setIsOpen(false);
      }
   };

   React.useEffect(() => {
      document.addEventListener("mousedown", handleClickAway);
      return () => {
         document.removeEventListener("mousedown", handleClickAway);
      };
   });

   const motionBasket = {
      fromBasket: {
         opacity: 0,
         y: 20,
      },
      toBasket: {
         opacity: 1,
         y: 40,
      },
   };

   return (
      <motion.div
         initial='fromBasket'
         animate='toBasket'
         exit='fromBasket'
         variants={motionBasket}
         transition={{ duration: 0.15 }}
         className={saved.length > 0 ? st.basket__wrap : st.basket__wrap_empty}
         ref={basketRef}
      >
         <div className={st.basket__content}>
            <div>
               {saved.length > 0 ? (
                  saved.map((savedGame) => (
                     <BasketItem key={savedGame.id} savedGame={savedGame} />
                  ))
               ) : (
                  <EmptyBasket />
               )}
            </div>
            {saved.length > 0 ? (
               <div className={st.basket__checkout}>
                  <hr className='bg-primary w-full -translate-y-[10px]' />
                  <button
                     onClick={() => handleCheckout()}
                     className={st.basket__checkout_button}
                  >
                     Оформить
                  </button>
               </div>
            ) : (
               ""
            )}
         </div>
      </motion.div>
   );
};

export default BasketList;
