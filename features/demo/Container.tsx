import { Box, Heading } from "@chakra-ui/react";
import DemoCard from "features/demo/components/DemoCard";

const Container = () => {
  return (
    <Box>
      <Heading textAlign="center">Parsewise Demos</Heading>

      <Box mt={8} textAlign="center">
        <Box display="inline-block">
          <DemoCard
            title="Student Activity"
            description="Figure out the best locations to build cell towers to cover as many
            households as possible."
            buttonText="Try Student Demo"
            imageSrc="/demo_2.gif"
            buttonHref="/project/1"
          />
        </Box>
        <Box display="inline-block" ml={[0, 8]}>
          <DemoCard
            title="Teacher's View"
            description="See student results and showcase student responses to start meaningful discussions"
            buttonText="See Teacher's Activity View"
            imageSrc="/student_solutions.gif"
            buttonHref="teacher/activity/demo"
          />
        </Box>
        <Box display="inline-block" ml={[0, 8]}>
          <DemoCard
            title="Customize Activity"
            description="Edit default lessons to make them more relevant for your community."
            buttonText="Edit Custom Lesson"
            imageSrc="/student_solutions.gif"
            buttonHref="project/edit/1"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
