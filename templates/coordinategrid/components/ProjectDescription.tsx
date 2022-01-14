import { Box, Heading, Text, OrderedList, ListItem } from "@chakra-ui/react";
import parse from "html-react-parser";
import { replaceListDom } from "utils/htmlParser";

export const ProjectDescription = ({ data }) => {
  return (
    <Box>
      <Box mt={8}>
        <Heading fontSize="2xl">Overview</Heading>
        <Box mt={4} mb={4}>
          {parse(data.overview, {
            replace: replaceListDom,
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDescription;
