import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../helpers/util";

const prismaClientSingleton = () => {
  const prismaClient = new PrismaClient().$extends({
    model: {
      user: {
        async createUser(email: string, password: string) {
          const hash = hashPassword(password)
          return prismaClient.user.create({
            data: {
              email,
              password: hash
            },
          });
        },
      },
    },
  });

  return prismaClient
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
