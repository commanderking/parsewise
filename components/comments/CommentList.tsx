import CommentComponent from "components/comments/CommentComponent";
import { Box, Heading } from "@chakra-ui/react";
import { Comment } from "components/comments/types";

type Props = {
  comments: Comment[];
};

const CommentList = ({ comments }: Props) => {
  const NoCommentDisplay = () => (
    <Box mt={4} p={5} backgroundColor="lightgray">
      No comments yet. Comments will appear after others review your work!
    </Box>
  );

  return (
    <Box borderTop="1px solid lightgray" p={1}>
      <Heading mt={2} fontSize="lg">
        Comments
      </Heading>
      {!comments.length ? (
        <NoCommentDisplay />
      ) : (
        comments.map((comment) => {
          return (
            <Box>
              <CommentComponent {...comment} />
            </Box>
          );
        })
      )}
    </Box>
  );
};

export default CommentList;
