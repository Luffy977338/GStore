import { useTypedSelector } from "./useTypedSelector";

export const useLimit = () => {
   const saved = useTypedSelector((state) => state.limit);

   return saved;
};
