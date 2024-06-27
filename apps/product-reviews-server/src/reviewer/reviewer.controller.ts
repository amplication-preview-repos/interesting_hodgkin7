import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewerService } from "./reviewer.service";
import { ReviewerControllerBase } from "./base/reviewer.controller.base";

@swagger.ApiTags("reviewers")
@common.Controller("reviewers")
export class ReviewerController extends ReviewerControllerBase {
  constructor(
    protected readonly service: ReviewerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
