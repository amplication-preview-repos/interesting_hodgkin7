import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  rating?: SortOrder;
  reviewBody?: SortOrder;
  reviewTitle?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
