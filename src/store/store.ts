import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import api from "./api/api";
import savedSlice from "./saved/saved.slice";
import authSlice from "./auth/auth.slice";
import querySlice from "./query/query.slice";
import limitSlice from "./query/limit.slice";

const reducers = combineReducers({
   saved: savedSlice.reducer,
   auth: authSlice.reducer,
   query: querySlice.reducer,
   limit: limitSlice.reducer,
   [api.reducerPath]: api.reducer,
});

export const store = configureStore({
   reducer: reducers,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
