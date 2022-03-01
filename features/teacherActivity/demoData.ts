import _ from "lodash";
import { StudentSolution } from "templates/coordinategrid/types";
import { Comment } from "model/comment";
import { proposals, comments, students } from "data/celltower/solutions";
import { Student } from "model/student";

// This is mimicking some layer of the app. It might move to backend or frontend right after request, or selector work

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
  comments: Comment[],
  students: Student[]
): StudentSolution[] => {
  const commentsByProposalId = _.groupBy(comments, "activityId");
  const studentsById = _.keyBy(students, "id");

  console.log({ studentsById });
  return proposals.map((proposal) => {
    const commentsForProposal = commentsByProposalId[proposal.id] || [];
    return {
      ...proposal,
      studentName: studentsById[proposal.studentId]?.name || null,
      votes: Math.round(Math.random() * 5),
      comments: formatComments(commentsForProposal, students),
    };
  });
};

export const demoData = getFormattedProposals(proposals, comments, students);
