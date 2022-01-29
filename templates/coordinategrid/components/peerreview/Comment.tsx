import { Box, Text, Textarea } from "@chakra-ui/react";

const Comment = ({ comment, handleCommentChange }) => {
  return (
    <Box maxWidth={"400px"} margin="auto">
      <Textarea
        value={comment}
        placeholder="Share kudos, give suggestions, ask questions..."
        onChange={handleCommentChange}
      ></Textarea>
    </Box>
  );
};

export default Comment;
