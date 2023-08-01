import React from "react";
import st from "./cart.module.scss";
import { BsSearch } from "react-icons/bs";
import { useActions } from "../../hooks/useActions";
import { getPagesArray } from "../../utils/pagesCount";
import SortPanel from "../sort-panel/SortPanel";
import { IGame } from "../../types/game.types";
import Navigation from "../navigation/Navigation";

interface ICart {
   children: React.ReactNode;
   data: IGame[] | undefined;
}

const Cart = ({ children, data }: ICart) => {
   const actions = useActions();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      actions.changeQuery(e.target.value);
   };

   return (
      <article>
         <div className={st.cart__wrap}>
            <h1 className='text-6xl font-semibold'>Игры</h1>
            <div className='flex'>
               <input
                  className={st.search}
                  onChange={handleChange}
                  type='text'
                  placeholder='Найти игру...'
               />
               <BsSearch className='text-neutral-400 absolute text-xl translate-y-[17px] translate-x-[20px]' />
            </div>
            <SortPanel />
         </div>
         {children}
         <Navigation data={data} />
      </article>
   );
};

export default Cart;
