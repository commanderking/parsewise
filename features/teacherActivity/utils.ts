import _ from "lodash";
import { iconMap } from "constants/icons";
export const processCoordinateGridSolutions = (studentSolution, activity) => {
  return studentSolution.map((solution) => {
    return {
      ...solution,
      solution: [
        ...solution.solution.map((solutionIcon) => ({
          ...solutionIcon,
          image: iconMap[solutionIcon.iconType].src,
          size: 15,
        })),
        ...activity.projectData.placedIcons.map((placedIcon) => ({
          ...placedIcon,
          image: iconMap[placedIcon.iconType].src,
          size: 15,
        })),
      ],
    };
  });
};

export const getTopSolutions = (solution, number) => {
  const sorted = _.sortBy(solution, "votes");

  return [...sorted].reverse().slice(0, number);
};
