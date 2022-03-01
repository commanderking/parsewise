import { Box, Heading, Text, Divider, Button, Grid } from "@chakra-ui/react";
import { CheckCircle, Star } from "react-feather";
import { StudentSolutions } from "features/teacherActivity/utils";
import ResponsiveGrid from "templates/coordinategrid/components/ResponsiveGrid";
import SolutionComments from "features/teacherActivity/components/SolutionComments";
import { gridBreakpointDimensions } from "templates/coordinategrid/constants";

type Props = {
  // As more solution comes in, this may need to be more unions of the different solution types
  solutionProps: {
    solutions: StudentSolutions;
    isEditable: boolean;
  };
  title?: string;
  subtitle?: string;
  starSolution?: (id) => void;
  showMetrics?: boolean;
  noSolutionsText?: string;
};

const iconSize = 20;

const TopProposals = ({
  solutionProps,
  title,
  subtitle,
  starSolution,
  showMetrics = true,
  noSolutionsText = "No solutions to display yet...",
}: Props) => {
  // Component should be dynamic based on the activity type
  const Component = ResponsiveGrid;

  const { solutions } = solutionProps;

  return (
    <Box mt={8}>
      {title && <Heading size="md">{title}</Heading>}
      {subtitle && <Text as={"i"}>{subtitle}</Text>}
      {!solutions.length && (
        <Box
          width="80%"
          height={"300px"}
          display="flex"
          backgroundColor="#ececec"
          justifyContent="center"
          alignItems="center"
          margin="auto"
          mt={10}
          mb={10}
          padding={20}
        >
          <Text>{noSolutionsText}</Text>
        </Box>
      )}

      {Boolean(solutions.length) && (
        <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]} mt={4} mb={4}>
          {solutions.map((solution) => {
            return (
              <Box key={solution.id} textAlign="center" mb={8}>
                <Text
                  as="b"
                  fontSize="lg"
                >{`${solution.studentName}'s Proposal`}</Text>
                <Box
                  display="inline-block"
                  backgroundColor={
                    solution.isStarred && showMetrics ? "lightyellow" : "white"
                  }
                >
                  <Component id="grid" activeIcons={solution.solution} />
                  <Box display="inline-flex" alignItems="center">
                    <Box
                      display="flex"
                      alignItems="center"
                      border="1px solid #ececec"
                      borderRadius={4}
                      height={10}
                      pl={3}
                      pr={3}
                      mr={2}
                    >
                      <Text fontSize="xl" mr={1}>
                        {solution.votes}
                      </Text>
                      <Box verticalAlign="top">
                        <CheckCircle
                          size={iconSize}
                          strokeWidth={3}
                          color="#00CC00"
                        />
                      </Box>
                    </Box>
                    {showMetrics && (
                      <Button
                        onClick={() => {
                          starSolution(solution.id);
                        }}
                      >
                        <Star
                          size={iconSize}
                          fill={solution.isStarred ? "yellow" : "white"}
                        />
                        <Text fontSize="md" ml={2}>
                          {solution.isStarred ? "Unstar" : "Star"}
                        </Text>
                      </Button>
                    )}
                  </Box>
                  <Box mt={2} maxWidth={gridBreakpointDimensions}>
                    <SolutionComments comments={solution.comments} />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
      )}
      <Divider />
    </Box>
  );
};

export default TopProposals;
