import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import { Phase } from "templates/types";

export const getDefaultIconCoordinates = (coordinates) => {
  return coordinates.map((coordinate) => ({
    ...coordinate,
    size: 15,
    image: "/home-icon.svg",
    canRemove: false,
  }));
};

export const getPlacedIconsForSolution = (solution) => {
  console.log("solution", solution);
  return solution.map((coordinate) => {
    const { x, y } = coordinate;
    return {
      x,
      y,
      size: 20,
      image: "/cell-tower.svg",
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
