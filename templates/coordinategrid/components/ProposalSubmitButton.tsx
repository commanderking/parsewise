import { Box, Button } from "@chakra-ui/react";
import { submitProposal } from "templates/coordinategrid/requests";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";

import { useRouter } from "next/router";

const getSubmitButtonText = (currentPhase) => {
  if (currentPhase === CoordinateGridPhases.PREDICTION) {
    return "Submit Prediction";
  }

  if (currentPhase === CoordinateGridPhases.MODIFY_PROPOSAL) {
    return "Finalize Proposal";
  }

  return "Submit Proposal";
};

const getOnClick = (addedIcons, projectId, nextPhase) => {
  return () => {
    submitProposal({
      addedIcons,
      activity: [],
      projectId,
      phase: nextPhase,
    });
  };
};

export const ProposalSubmitButton = ({
  addedIcons,
  currentPhase,
  nextPhase,
}) => {
  const router = useRouter();
  const { projectId } = router.query;
  return (
    <Box>
      <Button
        colorScheme="teal"
        onClick={getOnClick(addedIcons, projectId, nextPhase)}
      >
        {getSubmitButtonText(currentPhase)}
      </Button>
    </Box>
  );
};
