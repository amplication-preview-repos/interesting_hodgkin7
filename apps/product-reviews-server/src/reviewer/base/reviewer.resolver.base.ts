/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Reviewer } from "./Reviewer";
import { ReviewerCountArgs } from "./ReviewerCountArgs";
import { ReviewerFindManyArgs } from "./ReviewerFindManyArgs";
import { ReviewerFindUniqueArgs } from "./ReviewerFindUniqueArgs";
import { CreateReviewerArgs } from "./CreateReviewerArgs";
import { UpdateReviewerArgs } from "./UpdateReviewerArgs";
import { DeleteReviewerArgs } from "./DeleteReviewerArgs";
import { ReviewerService } from "../reviewer.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Reviewer)
export class ReviewerResolverBase {
  constructor(
    protected readonly service: ReviewerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Reviewer",
    action: "read",
    possession: "any",
  })
  async _reviewersMeta(
    @graphql.Args() args: ReviewerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Reviewer])
  @nestAccessControl.UseRoles({
    resource: "Reviewer",
    action: "read",
    possession: "any",
  })
  async reviewers(
    @graphql.Args() args: ReviewerFindManyArgs
  ): Promise<Reviewer[]> {
    return this.service.reviewers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Reviewer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reviewer",
    action: "read",
    possession: "own",
  })
  async reviewer(
    @graphql.Args() args: ReviewerFindUniqueArgs
  ): Promise<Reviewer | null> {
    const result = await this.service.reviewer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reviewer)
  @nestAccessControl.UseRoles({
    resource: "Reviewer",
    action: "create",
    possession: "any",
  })
  async createReviewer(
    @graphql.Args() args: CreateReviewerArgs
  ): Promise<Reviewer> {
    return await this.service.createReviewer({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reviewer)
  @nestAccessControl.UseRoles({
    resource: "Reviewer",
    action: "update",
    possession: "any",
  })
  async updateReviewer(
    @graphql.Args() args: UpdateReviewerArgs
  ): Promise<Reviewer | null> {
    try {
      return await this.service.updateReviewer({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Reviewer)
  @nestAccessControl.UseRoles({
    resource: "Reviewer",
    action: "delete",
    possession: "any",
  })
  async deleteReviewer(
    @graphql.Args() args: DeleteReviewerArgs
  ): Promise<Reviewer | null> {
    try {
      return await this.service.deleteReviewer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}