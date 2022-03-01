import _ from "lodash";
import { StudentSolution } from "templates/coordinategrid/types";

const proposalId1 = "unique-proposal-id-1";
const proposalId2 = "unique-proposal-id-2";
const proposalId3 = "unique-proposal-id-3";
const proposalId4 = "id-4";
const proposalId5 = "unique-proposal-id-5";

const studentIds = _.range(8).map((number) => `student-id-${number}`);

const studentNames = [
  "Chris R.",
  "Diana R.",
  "Edward L.",
  "Anthony M.",
  "Nitza M.",
  "Amanda A.",
  "Ton H.",
  "Vothom L.",
];

export const students = studentIds.map((studentId, index) => {
  return {
    id: studentId,
    name: studentNames[index],
  };
});

export const proposals = [
  {
    id: proposalId1,
    studentId: "abc-123",
    author: "STUDENT",
    solution: [
      { x: -6, y: -2 },
      { x: 4, y: -1 },
      { x: 3, y: 6 },
      { x: -6, y: 7 },
      { x: 7, y: -6 },
    ],
  },
  {
    id: proposalId2,
    studentId: "xyz-123",
    author: "STUDENT",
    solution: [
      { x: -1, y: -2 },
      { x: 0, y: 5 },
      { x: 7, y: 6 },
      { x: 8, y: -7 },
    ],
  },
  {
    id: proposalId3,
    studentId: null,
    author: "TEACHER",
    solution: [
      { x: -2, y: 2 },
      { x: 4, y: 5 },
      { x: -1, y: -2 },
      { x: 7, y: -6 },
    ],
  },
  {
    id: proposalId4,
    studentId: "abc-456",
    author: "STUDENT",
    solution: [
      {
        x: -1,
        y: 4,
      },
      {
        x: 5,
        y: 2,
      },
      {
        x: 3,
        y: 6,
      },
      {
        x: -2,
        y: -2,
      },
      {
        x: 3,
        y: -5,
      },
      {
        x: 8,
        y: -6,
      },
    ],
  },
  {
    id: proposalId5,
    studentId: "def-123",
    author: "STUDENT",
    solution: [
      { x: 0, y: 0, iconType: "CELL_TOWER" },
      { x: 0, y: 5, iconType: "CELL_TOWER" },
      { x: 7, y: 6, iconType: "CELL_TOWER" },
      { x: 8, y: -7, iconType: "CELL_TOWER" },
    ],
  },
] as StudentSolution[];

export const comments = [
  // Proposal 1
  {
    activityId: proposalId1,
    text: "This looks good!",
    approved: true,
    studentId: studentIds[1],
  },
  {
    activityId: proposalId1,
    text: "This works, but I was able to cover all houses with only four cell towers.",
    approved: true,
    studentId: studentIds[3],
  },
  {
    activityId: proposalId1,
    text: "The cell towers you placed cover a lot of area!",
    approved: true,
    studentId: studentIds[5],
  },
  // Proposal 2
  {
    activityId: proposalId2,
    text: "Wow! I didn't think to put a cell tower at (-1, -2), but that covers so many residents!",
    approved: true,
    studentId: studentIds[4],
  },
  {
    activityId: proposalId2,
    text: "Nice work! I didn't realize this could be done with only 4 cell towers.",
    approved: true,
    studentId: studentIds[7],
  },

  // Proposal 3
  {
    activityId: proposalId3,
    text: "I think House B is too far away from a cell tower.",
    studentId: studentIds[0],
    approved: false,
  },
  {
    activityId: proposalId3,
    text: "Nice job!",
    studentId: studentIds[1],
    approved: true,
  },
  {
    activityId: proposalId3,
    text: "House C is 5 miles away from the closest cell tower and House B is √18 away, which is more than √16 (4).",
    studentId: studentIds[7],
    approved: false,
  },

  // Proposal 4
  {
    activityId: proposalId4,
    text: "All houses get coverage, but this doesn't seem the most efficient. You have 6 cell towers when it can be done in 5.",
    studentId: studentIds[6],
    approved: false,
  },
  {
    activityId: proposalId4,
    text: "All houses are covered! Nice!",
    studentId: studentIds[2],
    approved: true,
  },

  // Proposal 5
  {
    activityId: proposalId5,
    text: "I think both houes F and H aren't covered by cell towers.",
    studentId: studentIds[0],
    approved: false,
  },
  {
    activityId: proposalId5,
    text: "House F is more than 5 miles from the closest cell tower!",
    studentId: studentIds[2],
    approved: false,
  },
];
