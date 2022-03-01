import { StudentSolution } from "templates/coordinategrid/types";

const proposalId1 = "unique-proposal-id-1";
const proposalId2 = "unique-proposal-id-2";
const proposalId3 = "unique-proposal-id-3";
const proposalId4 = "id-4";
const proposalId5 = "unique-proposal-id-5";

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
  // {
  //   id: proposalId3,
  //   studentId: null,
  //   author: "TEACHER",
  //   solution: [
  //     { x: -2, y: 2 },
  //     { x: 4, y: 5 },
  //     { x: -1, y: -2 },
  //     { x: 7, y: -6 },
  //   ],
  // },
  // {
  //   id: proposalId4,
  //   studentId: "abc-456",
  //   author: "STUDENT",
  //   solution: [
  //     {
  //       x: -1,
  //       y: 4,
  //     },
  //     {
  //       x: 5,
  //       y: 2,
  //     },
  //     {
  //       x: 3,
  //       y: 6,
  //     },
  //     {
  //       x: -2,
  //       y: -2,
  //     },
  //     {
  //       x: 3,
  //       y: -5,
  //     },
  //     {
  //       x: 8,
  //       y: -6,
  //     },
  //   ],
  // },
  // {
  //   id: proposalId5,
  //   studentId: "def-123",
  //   author: "STUDENT",
  //   solution: [
  //     { x: 0, y: 0, iconType: "CELL_TOWER" },
  //     { x: 0, y: 5, iconType: "CELL_TOWER" },
  //     { x: 7, y: 6, iconType: "CELL_TOWER" },
  //     { x: 8, y: -7, iconType: "CELL_TOWER" },
  //   ],
  // },
] as StudentSolution[];

export const comments = [
  {
    activityId: proposalId1,
    text: "This looks good!",
    approved: true,
  },
  {
    activityId: proposalId1,
    text: "This works, but I was able to cover all houses with only four cell towers.",
    approved: true,
  },
  {
    activityId: proposalId1,
    text: "The cell towers you placed cover a lot of area!",
    approved: true,
  },
  {
    activityId: proposalId2,
    text: "Wow! I didn't think to put a cell tower at (-1, -2), but that covers so many residents!",
    approved: true,
  },
  {
    activityId: proposalId2,
    text: "Nice work! I didn't realize this could be done with only 4 cell towers.",
    approved: true,
  },
];
