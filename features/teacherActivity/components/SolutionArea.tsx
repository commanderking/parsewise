import { Box, Heading, Text, Divider, Button } from "@chakra-ui/react";
import { CheckCircle, Star } from "react-feather";
import { StudentSolutions } from "features/teacherActivity/utils";
import { CoordinateGrid } from "open-math-tools";

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
  const Component = CoordinateGrid;

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
        <Box mt={4} mb={4}>
          {solutions.map((solution, index) => {
            return (
              <Box
                display="inline-flex"
                key={solution.id}
                alignItems="flex-start"
                textAlign="center"
                mb={8}
              >
                <Text
                  display="block"
                  fontSize="xl"
                  textAlign="center"
                  padding={2}
                  pl={3}
                  pr={3}
                >
                  #{index + 1}
                </Text>

                <Box
                  display="inline-block"
                  backgroundColor={
                    solution.isStarred && showMetrics ? "lightyellow" : "white"
                  }
                >
                  <Component
                    id="grid"
                    activeIcons={solution.solution}
                    gridHeight={400}
                    gridWidth={400}
                  />
                  {showMetrics && (
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
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
      <Divider />
    </Box>
  );
};

export default TopProposals;
