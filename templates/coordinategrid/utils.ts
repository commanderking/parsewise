import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import {
  Phase,
  CoordinateGridSolution,
  CoordinateGridRenderedSolution,
} from "templates/types";
import { iconMap } from "constants/icons";

export const getDefaultIconCoordinates = (
  solutionCoordinates: CoordinateGridSolution[]
) => {
  return solutionCoordinates.map((coordinate) => ({
    ...coordinate,
    size: 15,
    image: iconMap.HOUSE.src,
    canRemove: false,
  }));
};

export const getPlacedIconsForSolution = (
  solutionCoordinates: CoordinateGridSolution[]
) => {
  return solutionCoordinates.map((coordinate) => {
    const { x, y } = coordinate;
    return {
      x,
      y,
      size: 20,
      image: iconMap.CELL_TOWER.src,
      canRemove: true,
    };
  });
};

export const getPlacedIconCoordinates = (userSolutions) => {
  return getPlacedIconsForSolution(userSolutions[0]?.solution || []);
};

export const getCurrentPhase = (solutions): Phase => {
  if (!solutions.length) {
    return CoordinateGridPhases.PREDICTION;
  }

  if (solutions.length === 1) {
    return CoordinateGridPhases.FIRST_PROPOSAL;
  }

  if (solutions.length >= 2) {
    return CoordinateGridPhases.MODIFY_PROPOSAL;
  }
};
