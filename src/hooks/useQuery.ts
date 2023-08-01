import { useTypedSelector } from "./useTypedSelector";

export const useQuery = () => {
   const saved = useTypedSelector((state) => state.query);

   return saved;
};
