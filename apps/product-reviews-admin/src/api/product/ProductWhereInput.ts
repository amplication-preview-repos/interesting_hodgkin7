import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  productDescription?: StringNullableFilter;
  productName?: StringNullableFilter;
  productPrice?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
};
