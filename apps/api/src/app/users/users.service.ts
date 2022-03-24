import { DatabaseService } from '@indev/db';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { from } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  create({ data }: { data: Prisma.UserCreateInput }) {
    const usersSource = from(
      this.db.user.create({
        data,
      })
    );
    return usersSource;
  }

  findByUnique({ where }: { where: Prisma.UserWhereUniqueInput }) {
    const userSource = from(this.db.user.findFirst({ where }));
    return userSource;
  }
}
