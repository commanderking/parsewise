import React from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Comment from "templates/coordinategrid/components/peerreview/Comment";
import { useState } from "react";
import { submitFeedback } from "templates/coordinategrid/requests";
import { CheckCircle } from "react-feather";
import ResponsiveGrid from "templates/coordinategrid/components/ResponsiveGrid";

const Solution = ({
  allPlacedCoordinates,
  proposedSolution,
  review,
  upvote,
  giveFeedback,
  reviewNext,
  currentPhase,
}) => {
  const router = useRouter();
  const { projectId, studentId } = router.query;

  const [comment, setComment] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { id } = proposedSolution;

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const isUpvoted = review && review.isUpvoted;
  const upvotedColor = isUpvoted ? "#00CC00" : "black";

  if (hasSubmitted) {
    return (
      <Box textAlign="center">
        <Heading fontSize="2xl" mb={8}>
          Feedback Submitted
        </Heading>
        <CheckCircleIcon
          size="xl"
          w={16}
          h={16}
          color="teal"
          display="block"
          margin="auto"
          mb={8}
        />
        <Button onClick={() => reviewNext()}>Review Another Proposal</Button>
      </Box>
    );
  }

  return (
    <Box textAlign="center">
      <Heading fontSize="2xl">Community Proposal</Heading>
      <Text as={"i"}>Provide feedback to your peers.</Text>
      <Box margin="auto">
        <ResponsiveGrid
          id="coordinate grid"
          activeIcons={allPlacedCoordinates}
        />
      </Box>

      <Box display="inline-flex" alignItems="center" mb={2}>
        <Box alignItems="center" border="1px solid #ececec" borderRadius={4}>
          <Button
            onClick={() => {
              upvote(id);
            }}
            variant="ghost"
          >
            <Text mr={2}>{isUpvoted ? "Approved!" : "Approve?"}</Text>

            <CheckCircle size={24} strokeWidth={3} color={upvotedColor} />
          </Button>
        </Box>
      </Box>

      <Comment comment={comment} handleCommentChange={handleCommentChange} />
      <Button
        colorScheme="teal"
        isDisabled={!Boolean(comment.trim())}
        onClick={() => {
          // Mimic call
          setTimeout(() => {
            giveFeedback(id, comment);
            submitFeedback({
              studentId,
              proposerStudentId: proposedSolution.studentId,
              projectId,
              proposalId: proposedSolution.id,
              comment,
            });
            setHasSubmitted(true);
          }, 500);
        }}
      >
        Submit Feedback
      </Button>
    </Box>
  );
};

export default Solution;
