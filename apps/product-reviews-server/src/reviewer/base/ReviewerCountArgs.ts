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
import { ReviewerWhereInput } from "./ReviewerWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ReviewerCountArgs {
  @ApiProperty({
    required: false,
    type: () => ReviewerWhereInput,
  })
  @Field(() => ReviewerWhereInput, { nullable: true })
  @Type(() => ReviewerWhereInput)
  where?: ReviewerWhereInput;
}

export { ReviewerCountArgs as ReviewerCountArgs };
