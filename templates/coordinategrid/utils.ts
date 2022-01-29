import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import { Phase } from "templates/types";
import { CoordinateGridSolution } from "templates/coordinategrid/types";
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

// Grab from local storage for now - later, this will likely be persisted on as part of the activity
export const getCurrentPhase = (activityId): Phase => {
  const phase = localStorage.getItem(`${activityId}-phase`) as Phase;

  if (phase) {
    return phase;
  }

  return CoordinateGridPhases.PREDICTION;
};

export const getNextPhase = (currentPhase) => {
  const phases = Object.keys(CoordinateGridPhases);
  const currentPhaseIndex = phases.findIndex((phase) => phase === currentPhase);
  const nextPhase = phases[currentPhaseIndex + 1];

  return nextPhase;
};
