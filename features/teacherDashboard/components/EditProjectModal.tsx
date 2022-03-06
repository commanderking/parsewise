import ContainerEditable from "templates/coordinategrid/ContainerEditable";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Project } from "model/project";
import { saveCustomProject } from "templates/coordinategrid/requests";
import { useToast } from "@chakra-ui/react";

type Props = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

const EditProjectModal = ({ project, isOpen, onClose }: Props) => {
  const savedSuccessfulToast = useToast();
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
      <ModalOverlay />
      <ModalContent mt={8} ml={8} mr={8}>
        <ModalCloseButton />
        <ModalBody>
          <Box mt={8}>
            {project && (
              <ContainerEditable
                data={project}
                onSave={(project: Project) => {
                  saveCustomProject(project);
                  savedSuccessfulToast({
                    title: "Project saved",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                  });
                }}
                onCancel={onClose}
              />
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProjectModal;
