import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productDescription?: SortOrder;
  productName?: SortOrder;
  productPrice?: SortOrder;
  updatedAt?: SortOrder;
};
