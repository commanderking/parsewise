import { Box, Heading } from "@chakra-ui/react";
import { Phase } from "templates/types";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
type Props = {
  currentPhase: Phase;
};

const { PREDICTION, FIRST_PROPOSAL, MODIFY_PROPOSAL } = CoordinateGridPhases;
const fontSize = "2xl";

export const SolutionAreaDescription = ({ currentPhase }: Props) => {
  return (
    <Box>
      {currentPhase === PREDICTION && (
        <Heading fontSize={fontSize}>What are your initial thoughts?</Heading>
      )}
      {currentPhase === FIRST_PROPOSAL && (
        <Heading fontSize={fontSize}>Your Current Prediction</Heading>
      )}
      {currentPhase === MODIFY_PROPOSAL && (
        <Heading fontSize={fontSize}>Your Current Proposal</Heading>
      )}
    </Box>
  );
};

export default SolutionAreaDescription;
