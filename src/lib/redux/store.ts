import { configureStore } from "@reduxjs/toolkit";
import RoutingSlice from "./slices/routingSlice";

export const store = configureStore({
  reducer: {
    routing: RoutingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
