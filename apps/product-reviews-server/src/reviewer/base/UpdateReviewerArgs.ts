/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewerWhereUniqueInput } from "./ReviewerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReviewerUpdateInput } from "./ReviewerUpdateInput";

@ArgsType()
class UpdateReviewerArgs {
  @ApiProperty({
    required: true,
    type: () => ReviewerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReviewerWhereUniqueInput)
  @Field(() => ReviewerWhereUniqueInput, { nullable: false })
  where!: ReviewerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReviewerUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReviewerUpdateInput)
  @Field(() => ReviewerUpdateInput, { nullable: false })
  data!: ReviewerUpdateInput;
}

export { UpdateReviewerArgs as UpdateReviewerArgs };
