import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewerModuleBase } from "./base/reviewer.module.base";
import { ReviewerService } from "./reviewer.service";
import { ReviewerController } from "./reviewer.controller";
import { ReviewerResolver } from "./reviewer.resolver";

@Module({
  imports: [ReviewerModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewerController],
  providers: [ReviewerService, ReviewerResolver],
  exports: [ReviewerService],
})
export class ReviewerModule {}
