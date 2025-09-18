import { PrismaClient } from '@prisma/client';

// Prevent multiple instances of PrismaClient in dev (Next.js hot reload issue)
const globalForPrisma = global as unknown as {
  prisma?: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// ✅ Supports both imports
// Named import:   import { prisma } from "@/lib/prisma";
// Default import: import prisma from "@/lib/prisma";
export { prisma };
export default prisma;
