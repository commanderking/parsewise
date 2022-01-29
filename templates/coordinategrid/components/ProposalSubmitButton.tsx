import { Box, Button } from "@chakra-ui/react";
import { submitProposal } from "templates/coordinategrid/requests";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import { Phase } from "templates/types";
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

type Props = {
  addedIcons: any[];
  currentPhase: Phase;
  nextPhase: Phase;
  isDisabled: boolean;
};

export const ProposalSubmitButton = ({
  addedIcons,
  currentPhase,
  nextPhase,
  isDisabled,
}: Props) => {
  const router = useRouter();
  const { projectId } = router.query;
  return (
    <Box>
      <Button
        isDisabled={isDisabled}
        colorScheme="teal"
        onClick={getOnClick(addedIcons, projectId, nextPhase)}
      >
        {getSubmitButtonText(currentPhase)}
      </Button>
    </Box>
  );
};
