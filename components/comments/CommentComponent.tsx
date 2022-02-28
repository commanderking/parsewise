import { Box, Grid } from "@chakra-ui/react";
import { Comment } from "components/comments/types";

type Props = Comment;

export const CommentComponent = ({ text, name }: Props) => {
  return (
    <Box>
      <Grid templateColumns={["50px", "1fr"]}></Grid>
    </Box>
  );
};

export default CommentComponent;
