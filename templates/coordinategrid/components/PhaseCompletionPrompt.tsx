import { Alert, AlertIcon } from "@chakra-ui/react";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";

export const PhaseCompletionPrompt = ({ data, currentPhase }) => {
  if (currentPhase === CoordinateGridPhases.PREDICTION) {
    return null;
  }

  return (
    <Alert status="info" mb={8}>
      <AlertIcon />
      {data.phaseContent[currentPhase].instructions}
    </Alert>
  );
};

export default PhaseCompletionPrompt;
