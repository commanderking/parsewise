import _ from "lodash";
import { iconMap } from "constants/icons";
import {
  getDefaultIconCoordinates,
  getPlacedIconsForSolution,
} from "templates/coordinategrid/utils";

export const processCoordinateGridSolutions = (studentSolution, activity) => {
  const defaultPlacedIcons = getDefaultIconCoordinates(
    activity.projectData.placedIcons
  );

  return studentSolution.map((solution) => {
    return {
      ...solution,
      solution: [
        ...getPlacedIconsForSolution(solution.solution),
        ...defaultPlacedIcons,
      ],
    };
  });
};

export const getTopAndOtherSolutions = (solution, number) => {
  const sorted = [..._.sortBy(solution, "votes")].reverse();

  const topSolutions = sorted.slice(0, number);
  const otherSolutions =
    solution.length > number ? sorted.slice(number, solution.length) : [];
  return { topSolutions, otherSolutions };
};
