import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";
import { Phase } from "templates/types";

const demoMessages = {
  [CoordinateGridPhases.PREDICTION]: {
    id: CoordinateGridPhases.PREDICTION,
    context:
      "Teachers give students the initial problem prior to a lesson or unit. ",
    nextStep: "As a student, start by making your best prediction.",
  },
  [CoordinateGridPhases.FIRST_PROPOSAL]: {
    id: CoordinateGridPhases.FIRST_PROPOSAL,
    context:
      "After teacher led instruction, students are asked to revise their prediction based on what they've learned. ",
    nextStep: "Submit your first official proposal.",
  },
  [CoordinateGridPhases.MODIFY_PROPOSAL]: {
    id: CoordinateGridPhases.MODIFY_PROPOSAL,
    context:
      "After the first proposal, students see the work of their peers, provide feedback, and finalize their own proposals. ",
    nextStep:
      "Review the work of other students and finalize your own proposal.",
  },
  [CoordinateGridPhases.FINAL_SOLUTION]: {
    id: CoordinateGridPhases.FINAL_SOLUTION,
    context:
      "Nice! After all students have finalized their solutions, the teacher can share solutions with all students.",
    nextStep: "",
  },
} as const;

type Props = {
  isOpen: boolean;
  cancelRef: any;
  onClose: () => void;
  currentPhase: Phase;
};

const DemoAlert = ({ isOpen, cancelRef, onClose, currentPhase }: Props) => {
  const context = demoMessages[currentPhase].context;
  const nextStep = demoMessages[currentPhase].nextStep;
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Demo Context
          </AlertDialogHeader>

          <AlertDialogBody>
            <Text>{context}</Text>
            <Box mt={2}>
              <Text as="b">{nextStep}</Text>
            </Box>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} colorScheme="teal">
              Got it!
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DemoAlert;
