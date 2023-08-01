import React from "react";
import st from "./backspace-icon.module.scss";

interface IBackspaceIcon {
   className?: string;
   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackspaceIcon = ({ className, setVisible }: IBackspaceIcon) => {
   return (
      <div
         onClick={() => setVisible(false)}
         className={[st.icon, className].join(" ")}
      >
         <span></span>
         <span></span>
      </div>
   );
};

export default BackspaceIcon;
