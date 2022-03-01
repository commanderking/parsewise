import { Box, Grid, Text, Avatar } from "@chakra-ui/react";
import { Comment } from "model/comment";

type Props = Comment;

export const CommentComponent = ({ text, studentName }: Props) => {
  return (
    <Grid p={2} borderBottom="1px solid lightgray">
      <Text as="b" textAlign="left">
        {studentName}
      </Text>
      <Text textAlign="left">{text}</Text>
    </Grid>
  );
};

export default CommentComponent;
