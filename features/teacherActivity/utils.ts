import _ from "lodash";
import {
  getDefaultIconCoordinates,
  getPlacedIconsForSolution,
} from "templates/coordinategrid/utils";
import { StudentSolution } from "templates/coordinategrid/types";

export const processCoordinateGridSolutions = (
  studentSolutions: StudentSolution[],
  activity
) => {
  const defaultPlacedIcons = getDefaultIconCoordinates(
    activity.projectData.placedIcons
  );

  return studentSolutions.map((solution) => {
    return {
      ...solution,
      solution: [
        ...getPlacedIconsForSolution(solution.solution),
        ...defaultPlacedIcons,
      ],
    };
  });
};

// Function ideally remains generic for future cases as well
export const formatStudentSolutions = (
  studentSolutions: ReturnType<typeof processCoordinateGridSolutions>,
  starredSolutions: string[]
) => {
  const solutions = studentSolutions.map((solution) => {
    return {
      ...solution,
      isStarred: starredSolutions.includes(solution.id),
    };
  });
  const sorted = [..._.sortBy(solutions, "votes")].reverse();

  return sorted;
};

export type StudentSolutions = ReturnType<typeof formatStudentSolutions>;
