export type Comment = {
  activityId: string;
  text: string;
  approved: boolean;
  studentId: string;
  // appended later in code - likely won't come from backend
  studentName?: string;
};
