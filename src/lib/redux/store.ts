import { configureStore } from "@reduxjs/toolkit";
import RoutingSlice from "./slices/routingSlice";
import AuthSlice from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    routing: RoutingSlice,
    auth: AuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
