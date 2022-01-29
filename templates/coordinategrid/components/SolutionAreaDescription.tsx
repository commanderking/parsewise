import { Box, Heading } from "@chakra-ui/react";
type Props = {
  solutionPrompt: string;
};

const fontSize = "2xl";

export const SolutionAreaDescription = ({ solutionPrompt }: Props) => {
  return (
    <Box>
      <Heading fontSize={fontSize}>{solutionPrompt}</Heading>
    </Box>
  );
};

export default SolutionAreaDescription;
