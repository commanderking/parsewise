import CommentComponent from "components/comments/CommentComponent";
import { Box, Heading } from "@chakra-ui/react";
import { Comment } from "model/comment";

type Props = {
  comments: Comment[];
};

const CommentList = ({ comments }: Props) => {
  const NoCommentDisplay = () => (
    <Box mt={4} p={4} border="1px dashed lightgray">
      No comments yet. Comments will appear after others review your work!
    </Box>
  );

  const visibleComments = comments.filter(
    (comment) => comment.studentId && comment.studentName
  );

  return (
    <Box>
      <Heading mt={2} fontSize="lg">
        Comments
      </Heading>
      {!visibleComments.length ? (
        <NoCommentDisplay />
      ) : (
        visibleComments.map((comment) => {
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
