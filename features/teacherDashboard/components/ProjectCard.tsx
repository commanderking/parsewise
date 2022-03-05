import { Box, Heading, Text } from "@chakra-ui/react";
import { Project } from "model/project";
import parse from "html-react-parser";
type Props = {
  project: Project;
  actionableElements?: React.ReactElement;
};

const ProjectCard = ({ project, actionableElements }: Props) => {
  return (
    <Box
      padding={5}
      border="1px solid #ececec"
      borderRadius={5}
      key={`${project.id}-project-card-${project.id}`}
    >
      <Heading fontSize="xl">{project.name}</Heading>
      <Text height="4.5em" overflow="hidden" mt={4} noOfLines={3}>
        {parse(project.overview)}
      </Text>
      {actionableElements}
    </Box>
  );
};

export default ProjectCard;
