import { Box, Heading, Text } from "@chakra-ui/react";
import SolutionArea from "features/teacherActivity/components/SolutionArea";
import { StudentSolutions } from "features/teacherActivity/utils";

type Props = {
  // As more solution comes in, this may need to be more unions of the different solution types
  solutionProps: {
    solutions: StudentSolutions;
    isEditable: boolean;
    title?: string;
    starSolution?: (id) => void;
    showMetrics?: boolean;
  };
};

const title = "Starred Solutions";

const ShowcaseArea = ({ solutionProps }: Props) => {
  return (
    <Box>
      <SolutionArea
        solutionProps={solutionProps}
        title={title}
        subtitle="Starred solutions will appear here and be shared with students in your class."
        showMetrics={false}
        noSolutionsText="No solutions starred yet."
      />
    </Box>
  );
};

export default ShowcaseArea;
