import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  reviewBody?: string | null;
  reviewTitle?: string | null;
  user?: UserWhereUniqueInput | null;
};
