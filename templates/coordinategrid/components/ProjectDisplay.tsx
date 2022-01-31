import { Box, Heading, useDisclosure, Text, Grid } from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/coordinategrid/components/CoordinateGridSolutionArea";
import SolutionAreaDescription from "templates/coordinategrid/components/SolutionAreaDescription";
import {
  getDefaultIconCoordinates,
  getPlacedIconCoordinates,
} from "templates/coordinategrid/utils";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import ProjectDescription from "templates/coordinategrid/components/ProjectDescription";
import PhaseCompletionPrompt from "templates/coordinategrid/components/PhaseCompletionPrompt";
import ModifyProposalModal from "templates/coordinategrid/components/ModifyProposalModal";
import PeerReview from "templates/coordinategrid/components/peerreview/Container";
import ModifyProposalGrid from "templates/coordinategrid/components/ModifyProposalGrid";
type Props = {
  data: any;
  currentPhase: any;
  userSolutions?: Object[];
};

const ProjectDisplay = ({ data, currentPhase, userSolutions = [] }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

      <Box padding={8} textAlign="center" border="1px solid lightgray">
        <PhaseCompletionPrompt data={data} currentPhase={currentPhase} />

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
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

          {currentPhase === CoordinateGridPhases.MODIFY_PROPOSAL && (
            <PeerReview projectDefaultCoordinates={projectDefaultCoordinates} />
          )}
        </Grid>

        {/* <ModifyProposalModal
          isOpen={isOpen}
          currentPhase={currentPhase}
          onClose={onClose}
          mostRecentSolutionCoordinates={allIcons}
        /> */}
      </Box>
    </Box>
  );
};

export default ProjectDisplay;
