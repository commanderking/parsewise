import { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import CommentList from "components/comments/CommentList";

type Props = {
  comments: any;
};

const SolutionComments = ({ comments }) => {
  const [canViewComments, setCanViewComments] = useState(false);

  const getViewCommentsText = (comments, canViewComments) => {
    if (canViewComments) {
      return "Hide Comments";
    }

    return comments.length ? `View ${comments.length} Comments` : `No Comments`;
  };

  return (
    <Box>
      <Button
        p={2}
        variant="link"
        onClick={() => setCanViewComments(!canViewComments)}
      >
        {getViewCommentsText(comments, canViewComments)}
      </Button>
      {canViewComments && (
        <Box>
          <CommentList comments={comments} />
        </Box>
      )}
    </Box>
  );
};

export default SolutionComments;
