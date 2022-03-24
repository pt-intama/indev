import { Role } from '@prisma/client';

export interface JwtPayload {
  sub?: number | undefined;
  email?: string | undefined;
  username?: string | undefined;
  isVerified?: boolean | undefined;
  createdAt?: Date | undefined;
  role?: Role | undefined;
  iat?: number | undefined;
  exp?: number | undefined;
}
