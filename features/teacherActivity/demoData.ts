import { StudentSolution } from "templates/coordinategrid/types";

// Votes will likely need to be merged on
// activityId will be necessary in the longterm
export const demoData: StudentSolution[] = [
  {
    id: "unique-proposal-id-1",
    studentId: "abc-123",
    author: "STUDENT",
    solution: [
      { x: -6, y: -2, iconType: "CELL_TOWER" },
      { x: 4, y: -1, iconType: "CELL_TOWER" },
      { x: 3, y: 6, iconType: "CELL_TOWER" },
      { x: -6, y: 7, iconType: "CELL_TOWER" },
      { x: 7, y: -6, iconType: "CELL_TOWER" },
    ],
    votes: 5,
  },
  {
    id: "unique-proposal-id-2",
    studentId: "xyz-123",
    author: "STUDENT",
    solution: [
      { x: -1, y: -2, iconType: "CELL_TOWER" },
      { x: 0, y: 5, iconType: "CELL_TOWER" },
      { x: 7, y: 6, iconType: "CELL_TOWER" },
      { x: 8, y: -7, iconType: "CELL_TOWER" },
    ],
    votes: 1,
  },

  {
    id: "unique-proposal-id-3",
    studentId: null,
    author: "TEACHER",
    solution: [
      { x: -2, y: 2, iconType: "CELL_TOWER" },
      { x: 3, y: 2, iconType: "CELL_TOWER" },
      { x: -1, y: -2, iconType: "CELL_TOWER" },
      { x: 7, y: -6, iconType: "CELL_TOWER" },
    ],
    votes: 3,
  },
  {
    id: "unique-proposal-id-4",
    studentId: "def-123",
    author: "STUDENT",
    solution: [
      { x: 0, y: 0, iconType: "CELL_TOWER" },
      { x: 0, y: 5, iconType: "CELL_TOWER" },
      { x: 7, y: 6, iconType: "CELL_TOWER" },
      { x: 8, y: -7, iconType: "CELL_TOWER" },
    ],
    votes: 0,
  },
];
