import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  productDescription?: string | null;
  productName?: string | null;
  productPrice?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
