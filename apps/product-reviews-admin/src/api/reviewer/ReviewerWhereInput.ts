import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReviewerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  username?: StringNullableFilter;
};
