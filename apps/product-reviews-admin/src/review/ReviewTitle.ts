import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "reviewTitle";

export const ReviewTitle = (record: TReview): string => {
  return record.reviewTitle?.toString() || String(record.id);
};
