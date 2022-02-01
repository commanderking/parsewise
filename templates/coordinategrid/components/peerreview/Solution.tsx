import React from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import CoordinateGridSolutionArea from "templates/coordinategrid/components/CoordinateGridSolutionArea";
import Comment from "templates/coordinategrid/components/peerreview/Comment";
import { useState } from "react";
import { reactionIds } from "components/reactions/constants";
import { submitFeedback } from "templates/coordinategrid/requests";
import { CheckCircle } from "react-feather";

const Solution = ({
  allPlacedCoordinates,
  proposedSolution,
  review,
  upvote,
  giveFeedback,
  reviewNext,
}) => {
  const router = useRouter();
  const { projectId, studentId } = router.query;

  const [comment, setComment] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { id } = proposedSolution;

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

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

  const isUpvoted = review && review.isUpvoted;
  const upvotedColor = isUpvoted ? "#00CC00" : "black";

  return (
    <Box textAlign="center">
      <Heading fontSize="2xl">Community Proposal</Heading>
      <Text as={"i"}>Provide feedback to your peers.</Text>
      <CoordinateGridSolutionArea
        initialIcons={allPlacedCoordinates}
        isEditable={false}
        margin="auto"
      />

      <Box display="inline-flex" alignItems="center" mb={2}>
        <Box
          display="flex"
          alignItems="center"
          border="1px solid #ececec"
          borderRadius={4}
          height={10}
          pl={3}
          pr={3}
          mr={2}
        >
          {isUpvoted ? "Approved!" : "Approve?"}
        </Box>
        <Button
          onClick={() => {
            upvote(id);
          }}
          variant="ghost"
        >
          <CheckCircle size={24} strokeWidth={3} color={upvotedColor} />
        </Button>
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
