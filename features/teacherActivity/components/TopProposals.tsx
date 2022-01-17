import { Box, Heading, Text } from "@chakra-ui/react";
import CoordinateGridSolutionArea from "templates/coordinategrid/components/CoordinateGridSolutionArea";
import { ArrowUp } from "react-feather";
// TODO: Update props
type Props = {
  solutionProps: any;
};

const TopProposals = ({ solutionProps }) => {
  // Component should be dynamic based on the activity type
  const Component = CoordinateGridSolutionArea;
  return (
    <Box>
      <Heading size="md">Top Proposals</Heading>
      <Box>
        {solutionProps.solutions.map((solution) => {
          console.log("solution", solution);
          return (
            <Box display="inline-block">
              <Box>
                <Text display="inline-block" fontSize="xl">
                  {solution.votes}
                </Text>
                <Box display="inline-block" verticalAlign="top">
                  <ArrowUp size={24} strokeWidth={5} color="#00CC00" />
                </Box>
              </Box>
              <Component initialIcons={solution.solution} isEditable={false} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TopProposals;
