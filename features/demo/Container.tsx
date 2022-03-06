import { Box, Heading } from "@chakra-ui/react";
import DemoCard from "features/demo/components/DemoCard";

const Container = () => {
  return (
    <Box>
      <Heading textAlign="center">Parsewise Demos</Heading>

      <Box mt={8} textAlign="center">
        <Box display="inline-block">
          <DemoCard
            title="Student"
            description="Figure out the best locations to build cell towers to cover as many households as possible."
            buttonText="Try Student Demo"
            imageSrc="/demo_2.gif"
            buttonHref="/project/1"
          />
        </Box>
        <Box display="inline-block" ml={[0, 8]}>
          <DemoCard
            title="Teacher"
            description="View student results and comments, and customize projects for your students."
            buttonText="Try Teacher Demo"
            imageSrc="/student_solutions.gif"
            buttonHref="teacher/dashboard"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
