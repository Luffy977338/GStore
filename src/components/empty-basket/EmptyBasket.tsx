import React from "react";
import { BsCart3 } from "react-icons/bs";
import st from "./empty-basket.module.scss";

const EmptyBasket = () => {
   return (
      <div className={st.empty__wrap}>
         <div className=''>
            <BsCart3 className={st.empty__cart} />
            <div className='px-1 py-3 bg-neutral-700 z-10 w-[180px] -rotate-45 -translate-y-[100px] h-2'>
               <span className='w-[180px] -translate-y-[5px] h-2 bg-primary block'></span>
            </div>
            <p className={st.text}>Выбери игру</p>
         </div>
      </div>
   );
};

export default EmptyBasket;
