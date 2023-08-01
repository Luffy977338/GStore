import React from "react";
import { IGame } from "../../types/game.types";
import { getPagesArray } from "../../utils/pagesCount";
import { useActions } from "../../hooks/useActions";
import st from "./Navigation.module.scss";
import { useLimit } from "../../hooks/useLimit";

interface INavigation {
   data: IGame[] | undefined;
}

const Navigation = ({ data }: INavigation) => {
   const actions = useActions();
   const limit = useLimit();
   const totalPages = () => {
      if (data === undefined) {
         return;
      } else {
         return Math.ceil(data.length / 20);
      }
   };

   const pagesArray = getPagesArray(totalPages());
   return (
      <div className={st.page}>
         {pagesArray.map((page, index) => (
            <span
               key={index}
               className={
                  limit.page === page
                     ? st.page__changer_active
                     : st.page__changer
               }
               onClick={() => actions.changePage(page)}
            >
               {page}
            </span>
         ))}
      </div>
   );
};

export default Navigation;
