import { useState } from "react";
import {
  Box,
  Heading,
  Grid,
  Text,
  Button,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { getCustomProjects } from "templates/coordinategrid/requests";
import { Edit } from "react-feather";
import Link from "next/link";
import { CheckSquare, PlusSquare } from "react-feather";
import demoProject from "data/celltower/camden.json";
import ProjectCard from "features/teacherDashboard/components/ProjectCard";
import { Project } from "model/project";
import EditProjectModal from "features/teacherDashboard/components/EditProjectModal";

const TeacherDashboardContainer = () => {
  const assignedProjects = [demoProject] as Project[];
  const customProjects: Project[] = getCustomProjects();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  console.log({ editingProjectId });
  const editingProject = editingProjectId
    ? customProjects.find((project) => project.id === editingProjectId)
    : null;

  console.log({ editingProject });
  return (
    <Box>
      <Heading fontSize="2xl">Assigned Projects</Heading>
      <Text as="i">Projects already assigned to students</Text>

      <Grid
        mt={4}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={4}
      >
        {assignedProjects.map((assignedProject) => {
          return (
            <ProjectCard
              project={assignedProject}
              actionableElements={
                <Link href={`/teacher/activity/demo`}>
                  <Button mt={2} aria-label="View Results" colorScheme="teal">
                    <CheckSquare />
                    <Text ml={2}>View Results</Text>
                  </Button>
                </Link>
              }
            />
          );
        })}
      </Grid>

      <Divider mt={16} mb={8} />

      <Heading mt={4} fontSize="2xl">
        My Custom Projects
      </Heading>
      <Text as="i">
        Edit projects to make them more relevant for your students
      </Text>

      <Grid
        mt={4}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={4}
      >
        {customProjects.map((customProject) => {
          return (
            <ProjectCard
              project={customProject}
              actionableElements={
                <Box mt={4}>
                  <Button
                    isDisabled
                    mr={2}
                    colorScheme="teal"
                    aria-label="Assign"
                  >
                    <PlusSquare />
                    <Text ml={2}>Assign</Text>
                  </Button>
                  <Button
                    aria-label="Edit Button"
                    onClick={() => {
                      setEditingProjectId(customProject.id);
                      onOpen();
                    }}
                  >
                    <Edit />
                    <Text ml={2}>Edit</Text>
                  </Button>
                  <Text display="block" as="i">
                    (assignment of projects is disabled for demo)
                  </Text>
                </Box>
              }
            />
          );
        })}
      </Grid>

      <EditProjectModal
        project={editingProject}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default TeacherDashboardContainer;
