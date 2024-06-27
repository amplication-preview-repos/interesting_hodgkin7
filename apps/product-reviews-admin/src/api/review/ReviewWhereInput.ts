import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  rating?: IntNullableFilter;
  reviewBody?: StringNullableFilter;
  reviewTitle?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
