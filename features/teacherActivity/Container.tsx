import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { demoData } from "./demoData";
import { formatStudentSolutions } from "features/teacherActivity/utils";
import cellTowerActivity from "data/celltower/camden.json";
import { processCoordinateGridSolutions } from "features/teacherActivity/utils";
import SolutionArea from "features/teacherActivity/components/SolutionArea";
import ShowcaseArea from "features/teacherActivity/components/ShowcaseArea";

const TeacherActivityContainer = () => {
  const [starredSolutionIds, setStarredSolutionIds] = useState<string[]>([]);
  const projectDataSolutions = processCoordinateGridSolutions(
    demoData,
    cellTowerActivity
  );

  const studentSolutions = formatStudentSolutions(
    projectDataSolutions,
    starredSolutionIds
  );

  const starSolution = (id) => {
    if (starredSolutionIds.includes(id)) {
      setStarredSolutionIds(
        starredSolutionIds.filter((starredId) => starredId !== id)
      );
      return;
    }
    setStarredSolutionIds([id, ...starredSolutionIds]);
  };

  const commonProps = {
    isEditable: false,
  };

  const showcaseSolutionProps = {
    ...commonProps,
    solutions: studentSolutions.filter((solution) =>
      starredSolutionIds.includes(solution.id)
    ),
  };

  const studentSolutionProps = {
    ...commonProps,
    solutions: studentSolutions,
  };

  return (
    <Box>
      <Heading>Cell Towers</Heading>
      <ShowcaseArea solutionProps={showcaseSolutionProps} />
      <SolutionArea
        solutionProps={studentSolutionProps}
        title="All Student Solutions"
        starSolution={starSolution}
      />
    </Box>
  );
};

export default TeacherActivityContainer;
