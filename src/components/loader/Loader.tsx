import React from "react";
import st from "./Loader.module.css";

const Loader = () => {
   return (
      <div className='text-center translate-y-[40px]'>
         <div className={st.loader}>
            <svg viewBox='0 0 80 80'>
               <circle id='test' cx='40' cy='40' r='32'></circle>
            </svg>
         </div>

         <div className={st.loader + " " + st.triangle}>
            <svg viewBox='0 0 86 80'>
               <polygon points='43 8 79 72 7 72'></polygon>
            </svg>
         </div>

         <div className={st.loader}>
            <svg viewBox='0 0 80 80'>
               <rect x='8' y='8' width='64' height='64'></rect>
            </svg>
         </div>
      </div>
   );
};

export default Loader;
