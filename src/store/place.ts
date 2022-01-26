import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

import { createSlice } from "@reduxjs/toolkit";

interface PlaceState {
  isAddModalOpen: boolean;
}

const initialState: PlaceState = {
  isAddModalOpen: false,
};

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isAddModalOpen = action.payload;
    },
  },
});

export const { toggleModal } = placeSlice.actions;

export default placeSlice.reducer;
