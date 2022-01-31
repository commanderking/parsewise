import { useEffect, useState } from "react";
import useSWR from "swr";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Solution from "./Solution";
import { getPlacedIconsForSolution } from "templates/coordinategrid/utils";
import { getPeerReviewSolutions } from "templates/coordinategrid/utils";
import { Review } from "templates/coordinategrid/types";

const fetcher = (args) => fetch(args).then((res) => res.json());

const PeerProposalReview = ({ projectDefaultCoordinates }) => {
  const router = useRouter();
  const { projectId } = router.query;
  const { data, error } = useSWR(
    projectId ? [`/api/solutions/${projectId}`] : null,
    fetcher
  );

  const solutions = getPeerReviewSolutions(data);
  const [reviews, setReviews] = useState<{ [id: string]: Review }>({});

  const upvote = (id: string) => {
    setReviews({
      ...reviews,
      [id]: {
        ...reviews[id],
        isUpvoted: !reviews[id]?.isUpvoted,
      },
    });
  };

  const giveFeedback = (id: string, feedback: string) => {
    setReviews({
      ...reviews,
      [id]: {
        ...reviews[id],
        feedback,
      },
    });
  };

  console.log({ reviews });

  if (!data) {
    return <div>Loading Proposals</div>;
  }
  return (
    <Box textAlign="center">
      {solutions.map((proposedSolution, index) => {
        const allPlacedCoordinates = [
          ...projectDefaultCoordinates,
          ...getPlacedIconsForSolution(proposedSolution.solution),
        ];

        console.log("proposed id", reviews[proposedSolution.id]);

        return (
          <Box key={proposedSolution.id}>
            <Solution
              proposedSolution={proposedSolution}
              allPlacedCoordinates={allPlacedCoordinates}
              review={reviews[proposedSolution.id]}
              upvote={upvote}
              giveFeedback={giveFeedback}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default PeerProposalReview;
