import { useTypedSelector } from "./useTypedSelector";

export const useSaved = () => {
   const saved = useTypedSelector((state) => state.saved);

   return saved;
};
