import { Reviewer as TReviewer } from "../api/reviewer/Reviewer";

export const REVIEWER_TITLE_FIELD = "username";

export const ReviewerTitle = (record: TReviewer): string => {
  return record.username?.toString() || String(record.id);
};
