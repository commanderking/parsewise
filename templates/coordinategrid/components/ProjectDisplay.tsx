import { Box, Heading, Text, Grid, Divider } from "@chakra-ui/react";
import SolutionAreaDescription from "templates/coordinategrid/components/SolutionAreaDescription";
import {
  getDefaultIconCoordinates,
  getPlacedIconCoordinates,
} from "templates/coordinategrid/utils";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import ProjectDescription from "templates/coordinategrid/components/ProjectDescription";
import PhaseCompletionPrompt from "templates/coordinategrid/components/PhaseCompletionPrompt";
import PeerReview from "templates/coordinategrid/components/peerreview/Container";
import ModifyProposalGrid from "templates/coordinategrid/components/ModifyProposalGrid";
import LearningResources from "templates/coordinategrid/components/LearningResources";

type Props = {
  data: any;
  currentPhase: any;
  userSolutions?: Object[];
};

const ProjectDisplay = ({ data, currentPhase, userSolutions = [] }: Props) => {
  const mostRecentSolutionCoordinates = getPlacedIconCoordinates(userSolutions);
  const projectDefaultCoordinates = getDefaultIconCoordinates(
    data.projectData.placedIcons
  );

  const allIcons = [
    ...projectDefaultCoordinates,
    ...mostRecentSolutionCoordinates,
  ];
  return (
    <Box>
      <Box>
        <Heading>{data.name}</Heading>
      </Box>

      <Box mt={8}>
        <ProjectDescription data={data} />
      </Box>

      <Box padding={8} textAlign="center" border="1px solid #ececec">
        <PhaseCompletionPrompt data={data} currentPhase={currentPhase} />

        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={4}>
          <Box display="block">
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
