import * as graphql from "@nestjs/graphql";
import { Review } from "../review/base/Review";
import { ReviewUpdateInput } from "../review/base/ReviewUpdateInput";
import { ReviewModuleService } from "./reviewmodule.service";

export class ReviewModuleResolver {
  constructor(protected readonly service: ReviewModuleService) {}

  @graphql.Query(() => String)
  async CreateReview(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateReview(args);
  }

  @graphql.Query(() => [Review])
  async FetchReviewsForProduct(
    @graphql.Args()
    args: string
  ): Promise<Review[]> {
    return this.service.FetchReviewsForProduct(args);
  }

  @graphql.Mutation(() => Review)
  async UpdateReview(
    @graphql.Args()
    args: ReviewUpdateInput
  ): Promise<Review> {
    return this.service.UpdateReview(args);
  }
}
