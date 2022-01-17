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

export const getTopAndOtherSolutions = (
  studentSolutions: ReturnType<typeof processCoordinateGridSolutions>,
  number
) => {
  const sorted = [..._.sortBy(studentSolutions, "votes")].reverse();

  const topSolutions = sorted.slice(0, number);
  const otherSolutions =
    studentSolutions.length > number
      ? sorted.slice(number, studentSolutions.length)
      : [];
  return { topSolutions, otherSolutions };
};

export type TopSolutions = ReturnType<
  typeof getTopAndOtherSolutions
>["topSolutions"];
export type OtherSolutions = ReturnType<
  typeof getTopAndOtherSolutions
>["otherSolutions"];
