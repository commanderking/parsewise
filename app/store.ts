import { configureStore } from "@reduxjs/toolkit";
import coordinateGridSlice from "templates/coordinategrid/coordinateGridSlice";

const makeStore = () => {
  return configureStore({
    reducer: {
      coordinateGrid: coordinateGridSlice,
    },
  });
};

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
