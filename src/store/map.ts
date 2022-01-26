import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

import { createSlice } from "@reduxjs/toolkit";

interface MapState {
  latitude: number;
  longitude: number;
  zoom: number;
}

const initialState: MapState = {
  latitude: 51.505,
  longitude: 0,
  zoom: 13,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      state.latitude = action.payload.lat;
      state.longitude = action.payload.lng;
    },

    setZoomSize: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
  },
});

export const { setLocation } = mapSlice.actions;

export default mapSlice.reducer;
