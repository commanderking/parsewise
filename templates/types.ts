import { CoordinateGridPhases } from "templates/coordinategrid/constants";

export type Phase =
  | "PREDICTION"
  | "FIRST_PROPOSAL"
  | "MODIFY_PROPOSAL"
  | "FINAL_SOLUTION";
