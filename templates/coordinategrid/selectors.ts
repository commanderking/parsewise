import { createSelector } from "@reduxjs/toolkit";

import { selectCoordinateGridState } from "templates/coordinategrid/coordinateGridSlice";

export const selectCurrentPhase = createSelector(
  selectCoordinateGridState,
  (state) => state.currentPhase
);
