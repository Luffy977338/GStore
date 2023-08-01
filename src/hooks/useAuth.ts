import { useTypedSelector } from "./useTypedSelector";

export const useAuth = () => {
   const saved = useTypedSelector((state) => state.auth);

   return saved;
};
