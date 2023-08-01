import React from "react";
import st from "./auth-out.module.scss";
import { useActions } from "../../hooks/useActions";
import BackspaceIcon from "../backspace-icon/BackspaceIcon";

interface IAuthOut {
   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthOut = ({ setVisible }: IAuthOut) => {
   const actions = useActions();
   console.log("sadfljdsgh");
   const handleOut = () => {
      actions.authOut();
      setVisible(false);
   };

   return (
      <div className='w-full h-[600px] flex items-center justify-center flex-col'>
         <BackspaceIcon
            setVisible={setVisible}
            className='translate-x-[300px] -translate-y-[300px]'
         />
         <h1 className='text-3xl font-bold mb-24 text-center'>
            Вы уверены,
            <br /> что хотите выйти из аккаунта?
         </h1>
         <div className='grid grid-cols-2 gap-x-16'>
            <button className={st.button} onClick={() => setVisible(false)}>
               Нет
            </button>
            <button className={st.button} onClick={() => handleOut()}>
               Да
            </button>
         </div>
      </div>
   );
};

export default AuthOut;
