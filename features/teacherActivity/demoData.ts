import { StudentSolution } from "templates/coordinategrid/types";
import { proposals } from "data/celltower/solutions";
// Votes will likely need to be merged on
// activityId will be necessary in the longterm

export const demoData: StudentSolution[] = proposals.map((proposal) => {
  return {
    ...proposal,
    votes: Math.round(Math.random() * 5),
  };
});
