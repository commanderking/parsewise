import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/coordinategrid/components/CoordinateGridSolutionArea";
import { ArrowUp } from "react-feather";
import { TopSolutions } from "features/teacherActivity/utils";

// TODO: Update prop types
type Props = {
  // As more solution comes in, this may need to be more unions of the different solution types
  solutionProps: {
    solutions: TopSolutions;
    isEditable: boolean;
  };
  title: string;
};

const TopProposals = ({ solutionProps, title }: Props) => {
  // Component should be dynamic based on the activity type
  const Component = CoordinateGridSolutionArea;
  return (
    <Box mt={8}>
      <Heading size="md">{title}</Heading>
      <Box mb={4}>
        {solutionProps.solutions.map((solution) => {
          return (
            <Box display="inline-block" key={solution.id}>
              <Box>
                <Text display="inline-block" fontSize="xl">
                  {solution.votes}
                </Text>
                <Box display="inline-block" verticalAlign="top">
                  <ArrowUp size={24} strokeWidth={5} color="#00CC00" />
                </Box>
              </Box>
              <Component
                initialIcons={solution.solution}
                isEditable={solutionProps.isEditable}
              />
            </Box>
          );
        })}
      </Box>
      <Divider />
    </Box>
  );
};

export default TopProposals;
