import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import saved from "../store/saved/saved.slice";
import auth from "../store/auth/auth.slice";
import query from "../store/query/query.slice";
import limit from "../store/query/limit.slice";

const rootActions = {
   ...saved.actions,
   ...auth.actions,
   ...query.actions,
   ...limit.actions,
};

export const useActions = () => {
   const dispatch = useDispatch();

   return React.useMemo(
      () => bindActionCreators(rootActions, dispatch),
      [dispatch],
   );
};
