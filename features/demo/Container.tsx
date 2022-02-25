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
            description="Figure out the best locations to build cell towers to cover as many
            households as possible."
            buttonText="Try Student Demo"
            imageSrc="/demo_2.gif"
            buttonHref="/project/1"
          />
        </Box>
        <Box display="inline-block" ml={[0, 8]}>
          <DemoCard
            title="Teacher"
            description="Select and showcase interesting student responses to start student conversation"
            buttonText="Try Teacher Demo"
            imageSrc="/student_solutions.gif"
            buttonHref="teacher/activity/demo"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
