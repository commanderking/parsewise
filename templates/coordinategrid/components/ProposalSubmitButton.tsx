import { Box, Button } from "@chakra-ui/react";
import { submitProposal } from "templates/coordinategrid/requests";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";

import { useRouter } from "next/router";

const getSubmitButtonText = (currentPhase) => {
  if (currentPhase === CoordinateGridPhases.PREDICTION) {
    return "Submit Prediction";
  }

  if (currentPhase === CoordinateGridPhases.FIRST_PROPOSAL) {
    return "Edit";
  }

  return "Edit";
};

const getOnClick = (addedIcons, currentPhase, projectId, onOpen) => {
  if (currentPhase !== "PREDICTION") {
    return onOpen;
  }

  return () => {
    submitProposal({ addedIcons, activity: [], projectId });
  };
};

export const ProposalSubmitButton = ({ addedIcons, currentPhase, onOpen }) => {
  const router = useRouter();
  const { projectId } = router.query;
  return (
    <Box>
      <Button
        colorScheme="teal"
        onClick={getOnClick(addedIcons, currentPhase, projectId, onOpen)}
      >
        {getSubmitButtonText(currentPhase)}
      </Button>
    </Box>
  );
};
