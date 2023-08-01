import React from "react";
import st from "./auth-form.module.scss";
import { useActions } from "../../hooks/useActions";
import BackspaceIcon from "../backspace-icon/BackspaceIcon";

interface IAuthForm {
   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthForm = ({ setVisible }: IAuthForm) => {
   const actions = useActions();
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      actions.authIn();
   };

   const [containerStyles, setContainerStyles] = React.useState([st.container]);

   const handleMoveLeft = () => {
      setContainerStyles([...containerStyles, st.right_panel_active]);
   };

   const handleMoveRight = () => {
      setContainerStyles(containerStyles.slice(0, containerStyles.length - 1));
   };

   return (
      <div>
         <BackspaceIcon
            setVisible={setVisible}
            className='translate-x-[751px] -translate-y-[15px]'
         />
         <div className={containerStyles.join(" ")}>
            <div
               className={[st.form_container, st.sign_up_container].join(" ")}
            >
               <form action='#' onSubmit={handleSubmit}>
                  <h1 className={st.h1}>Create Account</h1>
                  <input autoComplete='off' type='text' placeholder='Name' />
                  <input
                     name='email'
                     autoComplete='off'
                     type='email'
                     placeholder='Email'
                  />
                  <input
                     autoComplete='off'
                     type='password'
                     placeholder='Password'
                  />
                  <button
                     onClick={() => setVisible(false)}
                     className={st.button}
                  >
                     Sign Up
                  </button>
               </form>
            </div>
            <div
               className={[st.form_container, st.sign_in_container].join(" ")}
            >
               <form action='#' onSubmit={handleSubmit}>
                  <h1 className={st.h1}>Sign in</h1>
                  <input autoComplete='off' type='email' placeholder='Email' />
                  <input
                     autoComplete='off'
                     type='password'
                     placeholder='Password'
                  />
                  <a className={st.link} href='#'>
                     Forgot your password?
                  </a>
                  <button
                     onClick={() => setVisible(false)}
                     className={st.button}
                  >
                     Sign In
                  </button>
               </form>
            </div>
            <div className={st.overlay_container}>
               <div className={st.overlay}>
                  <div
                     className={[st.overlay_panel, st.overlay_left].join(" ")}
                  >
                     <h1 className={st.h1}>Welcome Back!</h1>
                     <p className={st.par}>
                        To keep connected with us please login with your
                        personal info
                     </p>
                     <button
                        onClick={() => handleMoveRight()}
                        className={[st.ghost, st.button].join(" ")}
                     >
                        Sign In
                     </button>
                  </div>
                  <div
                     className={[st.overlay_panel, st.overlay_right].join(" ")}
                  >
                     <h1 className={st.h1}>Hello, Friend!</h1>
                     <p className={st.par}>
                        Enter your personal details and start journey with us
                     </p>
                     <button
                        onClick={() => handleMoveLeft()}
                        className={[st.ghost, st.button].join(" ")}
                     >
                        Sign Up
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AuthForm;
