import { Box, Heading } from "@chakra-ui/react";
import { demoData } from "./demoData";
import { getTopSolutions } from "features/teacherActivity/utils";
import cellTowerActivity from "data/celltower/camden.json";
import { processCoordinateGridSolutions } from "features/teacherActivity/utils";
import TopProposals from "features/teacherActivity/components/TopProposals";
const TeacherActivityContainer = () => {
  const projectDataSolutions = processCoordinateGridSolutions(
    demoData,
    cellTowerActivity
  );

  const solutionProps = {
    solutions: getTopSolutions(projectDataSolutions, 2),
    isEditable: false,
  };

  console.log({ solutionProps });

  return (
    <Box>
      <Heading>Cell Towers</Heading>
      <TopProposals solutionProps={solutionProps} />
    </Box>
  );
};

export default TeacherActivityContainer;
