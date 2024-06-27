import { SortOrder } from "../../util/SortOrder";

export type ReviewerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
