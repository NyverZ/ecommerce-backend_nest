import { Injectable } from "@nestjs/common";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { bearer } from "better-auth/plugins";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class AuthService {
  private readonly auth;

  constructor(private readonly prisma: PrismaService) {
    console.log("prisma connect", !!prisma)
    this.auth = betterAuth({
      database: prismaAdapter(this.prisma, {
        provider: "mysql",
      }),
      emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
      },
      plugins: [bearer()],
    });
  }

  getAuth() {
    return this.auth;
  }
}
