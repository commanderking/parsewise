import useSWR from "swr";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Solution from "./Solution";
import { getPlacedIconsForSolution } from "templates/coordinategrid/utils";

const fetcher = (args) => fetch(args).then((res) => res.json());

const PeerProposalReview = ({ projectDefaultCoordinates }) => {
  const router = useRouter();
  const { projectId } = router.query;
  const { data, error } = useSWR(
    projectId ? [`/api/solutions/${projectId}`] : null,
    fetcher
  );

  if (!data) {
    return <div>Loading Proposals</div>;
  }
  return (
    <Box padding={8}>
      <Heading fontSize="2xl">Review Community Proposals</Heading>
      <Text>
        Feel free to review and provide feedback on as many as possible!
      </Text>
      {data.map((proposedSolution, index) => {
        const allPlacedCoordinates = [
          ...projectDefaultCoordinates,
          ...getPlacedIconsForSolution(proposedSolution.solution),
        ];

        return (
          <Box
            key={proposedSolution.id}
            padding={8}
            border="1px solid lightgray"
            borderRadius={5}
            mt={8}
          >
            <Solution
              proposedSolution={proposedSolution}
              allPlacedCoordinates={allPlacedCoordinates}
              proposalNumber={index + 1}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default PeerProposalReview;
