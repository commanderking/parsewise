import { Phase } from "templates/types";

export const CoordinateGridPhases: { [key in Phase]: Phase } = {
  PREDICTION: "PREDICTION",
  FIRST_PROPOSAL: "FIRST_PROPOSAL",
  MODIFY_PROPOSAL: "MODIFY_PROPOSAL",
  FINAL_SOLUTION: "FINAL_SOLUTION",
};

export const gridDimension = 400;
