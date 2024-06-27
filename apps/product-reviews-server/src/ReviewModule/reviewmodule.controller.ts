import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReviewModuleService } from "./reviewmodule.service";
import { ReviewUpdateInput } from "../review/base/ReviewUpdateInput";
import { Review } from "../review/base/Review";

@swagger.ApiTags("reviewModules")
@common.Controller("reviewModules")
export class ReviewModuleController {
  constructor(protected readonly service: ReviewModuleService) {}

  @common.Get("/:id/create-review")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateReview(
    @common.Body()
    body: ReviewUpdateInput
  ): Promise<string> {
        return this.service.CreateReview(body);
      }

  @common.Get("/products/:id/reviews")
  @swagger.ApiOkResponse({
    type: Review
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchReviewsForProduct(
    @common.Body()
    body: ReviewUpdateInput
  ): Promise<Review[]> {
        return this.service.FetchReviewsForProduct(body);
      }

  @common.Put("/reviews/:id")
  @swagger.ApiOkResponse({
    type: Review
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateReview(
    @common.Body()
    body: ReviewUpdateInput
  ): Promise<Review> {
        return this.service.UpdateReview(body);
      }
}
