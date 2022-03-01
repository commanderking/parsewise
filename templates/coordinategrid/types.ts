// Raw data that will be stored in db
import { Comment } from "model/comment";

export type CoordinateGridSolution = {
  x: number;
  y: number;
  // Not needed now, but might be good for future where there are custom icons
  iconType?: string;
};

// How we render is specific to the UI
export type CoordinateGridRenderedSolution = CoordinateGridSolution & {
  image: string;
  size: number;
};

type Author = "STUDENT" | "TEACHER";

export type StudentSolution = {
  id: string;
  studentId: string;
  author: Author;
  solution: CoordinateGridSolution[];
  // This likely will be removed eventually when real data comes in. We'll need a new type which combiens StudentSolution with votes per that solution
  votes?: number;
  isStarred?: boolean;
  comments?: Comment[];
};

export type Review = {
  isUpvoted: boolean;
  feedback: string | null;
};

// Solution format for peer reviews
export type PeerReviewSolution = StudentSolution & Review;
