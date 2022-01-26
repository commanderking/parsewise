import { Box, Heading, useDisclosure } from "@chakra-ui/react";
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
        <PhaseCompletionPrompt data={data} currentPhase={currentPhase} />
        <ProjectDescription data={data} />
      </Box>

      <Box
        width="100%"
        padding={8}
        textAlign="center"
        border="1px solid lightgray"
      >
        <SolutionAreaDescription currentPhase={currentPhase} />
        <CoordinateGridSolutionArea
          isEditable={currentPhase === CoordinateGridPhases.PREDICTION}
          initialIcons={allIcons}
          initialAddedIcons={mostRecentSolutionCoordinates}
          currentPhase={currentPhase}
          onOpen={onOpen}
          margin={"auto"}
        />
        <ModifyProposalModal
          isOpen={isOpen}
          currentPhase={currentPhase}
          onClose={onClose}
          mostRecentSolutionCoordinates={allIcons}
        />
      </Box>
    </Box>
  );
};

export default ProjectDisplay;
