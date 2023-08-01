import React from "react";
import st from "./header.module.scss";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import BasketList from "../basket-list/BasketList";
import { AnimatePresence } from "framer-motion";
import { IoMdExit } from "react-icons/io";
import Modal from "../modal/Modal";
import { useAuth } from "../../hooks/useAuth";
import { toast, Toaster } from "react-hot-toast";
import AuthForm from "../auth-form/AuthForm";
import AuthOut from "../auth-out/AuthOut";

const Header = () => {
   const [isOpen, setIsOpen] = React.useState<boolean>(false);
   const [visible, setVisible] = React.useState<boolean>(false);
   const basketImgRef = React.useRef<null | HTMLDivElement>(null);
   const auth = useAuth();

   const toggleOpen = () => {
      setIsOpen(!isOpen);
   };

   const toastError = (text: string) => {
      toast.error(text, {
         style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
         },
      });
   };

   return (
      <header>
         <Toaster position='top-center' />
         <AnimatePresence mode='wait'>
            {visible ? (
               <Modal visible={visible} setVisible={setVisible}>
                  {auth.isAuth ? (
                     <AuthOut setVisible={setVisible} />
                  ) : (
                     <AuthForm setVisible={setVisible} />
                  )}
               </Modal>
            ) : (
               ""
            )}
         </AnimatePresence>
         <div className={st.header__wrap}>
            <div className={st.title}>
               <Link to='/home/_all'>
                  <span className='text-indigo-600'>G</span>
                  Store
               </Link>
            </div>
            <div className='translate-x-[300px]'>
               <div ref={basketImgRef}>
                  <button onClick={() => toggleOpen()}>
                     <BsCart4 className={st.basket} />
                  </button>
               </div>
               <AnimatePresence mode='wait'>
                  {isOpen ? (
                     <BasketList
                        setIsOpen={setIsOpen}
                        basketImgRef={basketImgRef}
                        toastError={toastError}
                     />
                  ) : (
                     ""
                  )}
               </AnimatePresence>
            </div>
            <div className='w-[101px] flex justify-center'>
               {auth.isAuth ? (
                  <div
                     className='flex cursor-pointer items-end text-2xl'
                     onClick={() => setVisible(true)}
                  >
                     <span className='mr-2'>Выход</span>
                     <IoMdExit />
                  </div>
               ) : (
                  <div
                     onClick={() => setVisible(true)}
                     className='flex cursor-pointer items-end text-2xl'
                  >
                     <span className='mr-2'>Вход</span>
                     <IoMdExit />
                  </div>
               )}
            </div>
         </div>
      </header>
   );
};

export default Header;
