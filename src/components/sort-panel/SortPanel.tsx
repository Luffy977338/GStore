import React from "react";
import { useActions } from "../../hooks/useActions";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const SortPanel = () => {
   const summaryRef = React.useRef<HTMLDivElement | null>(null);
   const optionsRef = React.useRef<HTMLDivElement | null>(null);
   const [isOpen, setIsOpen] = React.useState<boolean>(false);
   const actions = useActions();
   const location = useLocation();
   const path = useNavigate();

   const sortName = () => {
      const url = "/home/_";
      switch (location.pathname) {
         case `${url}all`:
            return "Все";
         case `${url}sandbox`:
            return "Песочницы";
         case `${url}battle-royale`:
            return "Батл рояль";
         case `${url}action-adventure`:
            return "Приключения";
         case `${url}action-rpg`:
            return "РПГ";
         case `${url}shooter`:
            return "Шутеры";
         case `${url}moba`:
            return "Моба";
      }
   };

   const handleClickAway = (event: any) => {
      if (
         optionsRef.current &&
         !optionsRef.current?.contains(event.target) &&
         !summaryRef.current?.contains(event.target)
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

   const handleLinkToSortAll = () => {
      setIsOpen(false);
      path("/home/_all");
   };

   const handleLinkToSort = (type: string) => {
      const url = `/home/_${type}`;
      actions.changeType(type);
      setIsOpen(false);
      path(url);
   };

   const motionType = {
      from: {
         y: -5,
         opacity: 0,
      },
      to: {
         y: 5,
         opacity: 1,
      },
   };

   return (
      <div className='flex flex-col'>
         <p className='text-xl -translate-x-[100px]'>Показать</p>
         <div ref={summaryRef} className=' absolute z-10'>
            <button
               onClick={() => setIsOpen(!isOpen)}
               className='bg-neutral-700 min-w-[150px] transition-all duration-200 text-left mb-2 rounded-lg px-2 py-1 hover:bg-neutral-600'
            >
               {sortName()}
            </button>
            <AnimatePresence mode='wait'>
               {isOpen ? (
                  <motion.div
                     initial='from'
                     animate='to'
                     exit='from'
                     variants={motionType}
                     transition={{ duration: 0.15 }}
                     ref={optionsRef}
                  >
                     <ul className='grid grid-cols-1'>
                        <li
                           className='hover:bg-neutral-600 cursor-pointer transition-colors bg-neutral-700 px-2 py-2 rounded-t-lg'
                           onClick={() => handleLinkToSortAll()}
                        >
                           Все
                        </li>
                        <li
                           className='hover:bg-neutral-600 cursor-pointer transition-colors bg-neutral-700 px-2 py-2'
                           onClick={() => handleLinkToSort("battle-royale")}
                        >
                           Батл рояль
                        </li>
                        <li
                           className='hover:bg-neutral-600 cursor-pointer transition-colors bg-neutral-700 px-2 py-2'
                           onClick={() => handleLinkToSort("shooter")}
                        >
                           Шутеры
                        </li>
                        <li
                           className='hover:bg-neutral-600 cursor-pointer transition-colors bg-neutral-700 px-2 py-2'
                           onClick={() => handleLinkToSort("action-adventure")}
                        >
                           Приключение
                        </li>
                        <li
                           className='hover:bg-neutral-600 cursor-pointer transition-colors bg-neutral-700 px-2 py-2'
                           onClick={() => handleLinkToSort("moba")}
                        >
                           Моба
                        </li>
                        <li
                           className='hover:bg-neutral-600 cursor-pointer transition-colors bg-neutral-700 px-2 py-2'
                           onClick={() => handleLinkToSort("action-rpg")}
                        >
                           РПГ
                        </li>
                        <li
                           className='hover:bg-neutral-600 cursor-pointer transition-colors bg-neutral-700 px-2 py-2 rounded-b-lg  '
                           onClick={() => handleLinkToSort("sandbox")}
                        >
                           Песочницы
                        </li>
                     </ul>
                  </motion.div>
               ) : (
                  ""
               )}
            </AnimatePresence>
         </div>
      </div>
   );
};

export default SortPanel;
