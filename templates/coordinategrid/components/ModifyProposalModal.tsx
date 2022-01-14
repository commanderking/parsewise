import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ModifyProposalGrid from "templates/coordinategrid/components/ModifyProposalGrid";
import { CoordinateGridPhases } from "templates/coordinategrid/constants";

const getHeaderText = (currentPhase) => {
  if (currentPhase === CoordinateGridPhases.FIRST_PROPOSAL) {
    return "Modify Your Original Prediction";
  }

  return "Modify Proposal";
};

const ModifyProposalModal = ({
  isOpen,
  onClose,
  mostRecentSolutionCoordinates,
  currentPhase,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{getHeaderText(currentPhase)}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModifyProposalGrid
            mostRecentSolutionCoordinates={mostRecentSolutionCoordinates}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModifyProposalModal;
