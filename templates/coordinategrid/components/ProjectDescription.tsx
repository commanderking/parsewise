import { Box } from "@chakra-ui/react";
import parse from "html-react-parser";
import { replaceListDom } from "utils/htmlParser";

export const ProjectDescription = ({ data }) => {
  return (
    <Box mt={8} backgroundColor="#ececec" padding={8}>
      <Box>
        {parse(data.overview, {
          replace: replaceListDom,
        })}
      </Box>
    </Box>
  );
};

export default ProjectDescription;
