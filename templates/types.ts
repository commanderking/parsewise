import { CoordinateGridPhases } from "templates/coordinategrid/constants";

export type Phase =
  | "PREDICTION"
  | "FIRST_PROPOSAL"
  | "MODIFY_PROPOSAL"
  | "FINAL_SOLUTION";

// Raw data that will be stored in db
export type CoordinateGridSolution = {
  x: number;
  y: number;
};

// How we render is specific to the UI
export type CoordinateGridRenderedSolution = CoordinateGridSolution & {
  image: string;
  size: number;
};
