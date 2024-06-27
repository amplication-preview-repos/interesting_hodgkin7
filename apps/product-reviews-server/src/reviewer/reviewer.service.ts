import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewerServiceBase } from "./base/reviewer.service.base";

@Injectable()
export class ReviewerService extends ReviewerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
