import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import { Phase } from "templates/types";

type CoordinateGridState = {
  currentPhase: keyof typeof CoordinateGridPhases;
};

const initialState: CoordinateGridState = {
  currentPhase: CoordinateGridPhases.PREDICTION,
};

export const coordinateGridSlice = createSlice({
  name: "coordinateGrid",
  initialState,
  reducers: {
    setCurrentPhase: (state, action: PayloadAction<Phase>) => {
      state.currentPhase = action.payload;
    },
  },
});

export const { setCurrentPhase } = coordinateGridSlice.actions;

export const selectCoordinateGridState = (state): CoordinateGridState =>
  state.coordinateGrid;

export default coordinateGridSlice.reducer;
