import {
  Box,
  Heading,
  Text,
  Grid,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import SolutionAreaDescription from "templates/coordinategrid/components/SolutionAreaDescription";
import {
  getDefaultIconCoordinates,
  getPlacedIconCoordinates,
} from "templates/coordinategrid/utils";
import {
  CoordinateGridPhases,
  gridBreakpointDimensions,
} from "templates/coordinategrid/constants";
import ProjectDescription from "templates/coordinategrid/components/ProjectDescription";
import PhaseCompletionPrompt from "templates/coordinategrid/components/PhaseCompletionPrompt";
import PeerReview from "templates/coordinategrid/components/peerreview/Container";
import ModifyProposalGrid from "templates/coordinategrid/components/ModifyProposalGrid";
import LearningResources from "templates/coordinategrid/components/LearningResources";
import { StudentSolution } from "templates/coordinategrid/types";

type Props = {
  data: any;
  currentPhase: any;
  userSolutions?: StudentSolution[];
};

const ProjectDisplay = ({ data, currentPhase, userSolutions = [] }: Props) => {
  console.log({ userSolutions });
  const mostRecentSolutionCoordinates = getPlacedIconCoordinates(userSolutions);
  const projectDefaultCoordinates = getDefaultIconCoordinates(
    data.projectData.placedIcons
  );

  const allIcons = [
    ...projectDefaultCoordinates,
    ...mostRecentSolutionCoordinates,
  ];

  const gridDimension = useBreakpointValue(gridBreakpointDimensions);
  console.log({ gridDimension });
  return (
    <Box>
      <Box>
        <Heading>{data.name}</Heading>
      </Box>

      <Box mt={8}>
        <ProjectDescription data={data} />
      </Box>

      <Box padding={[2, 8]} textAlign="center" border="1px solid #ececec">
        <PhaseCompletionPrompt data={data} currentPhase={currentPhase} />

        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={4}>
          <Box display="block" id="hey">
            <SolutionAreaDescription
              solutionPrompt={data.phaseContent[currentPhase].solutionPrompt}
            />
            {data.phaseContent[currentPhase].solutionPromptHelper && (
              <Text as="i">
                {data.phaseContent[currentPhase].solutionPromptHelper}
              </Text>
            )}
            <ModifyProposalGrid
              mostRecentSolutionCoordinates={allIcons}
              isEditable={currentPhase !== CoordinateGridPhases.FINAL_SOLUTION}
              currentPhase={currentPhase}
              gridDimension={gridDimension}
            />
          </Box>
          {currentPhase === CoordinateGridPhases.FIRST_PROPOSAL && (
            <Box>
              <LearningResources data={data} />
            </Box>
          )}
          {(currentPhase === CoordinateGridPhases.MODIFY_PROPOSAL ||
            currentPhase === CoordinateGridPhases.FINAL_SOLUTION) && (
            <PeerReview projectDefaultCoordinates={projectDefaultCoordinates} />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectDisplay;
