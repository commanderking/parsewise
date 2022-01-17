import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { demoData } from "./demoData";
import { getTopAndOtherSolutions } from "features/teacherActivity/utils";
import cellTowerActivity from "data/celltower/camden.json";
import { processCoordinateGridSolutions } from "features/teacherActivity/utils";
import SolutionArea from "features/teacherActivity/components/SolutionArea";

const TeacherActivityContainer = () => {
  const [starredSolutions, setStarredSolutions] = useState();
  const projectDataSolutions = processCoordinateGridSolutions(
    demoData,
    cellTowerActivity
  );

  const { topSolutions, otherSolutions } = getTopAndOtherSolutions(
    projectDataSolutions,
    2
  );

  const commonProps = {
    isEditable: false,
  };

  const topSolutionProps = {
    ...commonProps,
    solutions: topSolutions,
    isEditable: false,
  };

  const otherSolutionProps = {
    ...commonProps,
    solutions: otherSolutions,
  };

  console.log({ topSolutionProps });

  return (
    <Box>
      <Heading>Cell Towers</Heading>
      <SolutionArea solutionProps={topSolutionProps} title="Top Proposals" />
      <SolutionArea
        solutionProps={otherSolutionProps}
        title="Other Proposals"
      />
    </Box>
  );
};

export default TeacherActivityContainer;
