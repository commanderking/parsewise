import _ from "lodash";
import { StudentSolution } from "templates/coordinategrid/types";
import { Comment } from "model/comment";
import { proposals, comments, students } from "data/celltower/solutions";
import { Student } from "model/student";

const formatComments = (comments: Comment[], students: Student[]) => {
  const studentsById = _.keyBy(students, "id");

  return comments.map((comment) => {
    return {
      ...comment,
      studentName: studentsById[comment.studentId].name,
    };
  });
};

// Votes will likely need to be merged on
// activityId will be necessary in the longterm
export const getFormattedProposals = (
  proposals,
  comments,
  students
): StudentSolution[] => {
  const commentsByProposalId = _.groupBy(comments, "activityId");
  return proposals.map((proposal) => {
    const commentsForProposal = commentsByProposalId[proposal.id] || [];
    return {
      ...proposal,
      votes: Math.round(Math.random() * 5),
      comments: formatComments(commentsForProposal, students),
    };
  });
};

export const demoData = getFormattedProposals(proposals, comments, students);
