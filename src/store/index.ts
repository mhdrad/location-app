import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

// import reducers
import counterReducer from "./counter";
import placeReducer from "./place";
import mapReducer from "./map";

// import api services
import { placesApi } from "services/places";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    place: placeReducer,
    map: mapReducer,
    [placesApi.reducerPath]: placesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(placesApi.middleware);
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
