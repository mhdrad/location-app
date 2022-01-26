import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import placeReducer from "./place";
import mapReducer from "./map";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    place: placeReducer,
    map: mapReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
