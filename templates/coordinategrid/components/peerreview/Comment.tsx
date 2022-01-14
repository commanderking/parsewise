import { Box, Text, Textarea } from "@chakra-ui/react";

const Comment = ({ comment, handleCommentChange }) => {
  return (
    <Box width={"80%"} margin="auto">
      <Textarea
        value={comment}
        placeholder="Share kudos, give suggestions, ask questions..."
        onChange={handleCommentChange}
      ></Textarea>
    </Box>
  );
};

export default Comment;
