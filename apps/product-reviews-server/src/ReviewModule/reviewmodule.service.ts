import { Injectable } from "@nestjs/common";
import { Review } from "../review/base/Review";
import { ReviewUpdateInput } from "../review/base/ReviewUpdateInput";

@Injectable()
export class ReviewModuleService {
  constructor() {}
  async CreateReview(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchReviewsForProduct(args: string): Promise<Review[]> {
    throw new Error("Not implemented");
  }
  async UpdateReview(args: ReviewUpdateInput): Promise<Review> {
    throw new Error("Not implemented");
  }
}
