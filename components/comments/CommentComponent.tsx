import { Box, Grid, Text, Avatar } from "@chakra-ui/react";
import { Comment } from "components/comments/types";

type Props = Comment;

export const CommentComponent = ({ text }: Props) => {
  return (
    <Grid p={2} borderBottom="1px solid lightgray">
      <Text textAlign="left">{text}</Text>
    </Grid>
  );
};

export default CommentComponent;
