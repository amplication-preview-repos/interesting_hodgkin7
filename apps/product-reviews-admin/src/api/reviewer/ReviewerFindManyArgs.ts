import { ReviewerWhereInput } from "./ReviewerWhereInput";
import { ReviewerOrderByInput } from "./ReviewerOrderByInput";

export type ReviewerFindManyArgs = {
  where?: ReviewerWhereInput;
  orderBy?: Array<ReviewerOrderByInput>;
  skip?: number;
  take?: number;
};
