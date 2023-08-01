import React from "react";
import st from "./modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import BackspaceIcon from "../backspace-icon/BackspaceIcon";

interface IModal {
   children: React.ReactNode;
   visible: boolean;
   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, visible, setVisible }: IModal) => {
   const backContent = {
      from: {
         opacity: 0,
      },
      to: {
         opacity: 1,
      },
   };

   const content = {
      from: {
         y: -40,
         opacity: 0,
      },
      to: {
         y: 0,
         opacity: 1,
      },
   };

   return (
      <motion.div
         initial='from'
         animate='to'
         exit='from'
         variants={backContent}
         transition={{ duration: 0.3 }}
         className={visible ? st.active : st.modal}
         onClick={() => setVisible(false)}
      >
         <motion.div
            initial='from'
            animate='to'
            exit='from'
            variants={content}
            className={st.modalContent}
            onClick={(e) => e.stopPropagation()}
         >
            {children}
         </motion.div>
      </motion.div>
   );
};

export default Modal;
