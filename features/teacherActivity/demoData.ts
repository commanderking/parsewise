import _ from "lodash";
import { StudentSolution } from "templates/coordinategrid/types";
import { proposals, comments } from "data/celltower/solutions";

const commentsByProposalId = _.groupBy(comments, "activityId");

// Votes will likely need to be merged on
// activityId will be necessary in the longterm
export const demoData: StudentSolution[] = proposals.map((proposal) => {
  return {
    ...proposal,
    votes: Math.round(Math.random() * 5),
    comments: commentsByProposalId[proposal.id] || [],
  };
});
