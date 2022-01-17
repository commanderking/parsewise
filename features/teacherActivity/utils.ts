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
          size: 22,
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

export const getTopAndOtherSolutions = (solution, number) => {
  const sorted = [..._.sortBy(solution, "votes")].reverse();

  const topSolutions = sorted.slice(0, number);
  const otherSolutions =
    solution.length > number ? sorted.slice(number, solution.length) : [];
  return { topSolutions, otherSolutions };
};
