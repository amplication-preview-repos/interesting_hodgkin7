import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  productDescription?: string | null;
  productName?: string | null;
  productPrice?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
