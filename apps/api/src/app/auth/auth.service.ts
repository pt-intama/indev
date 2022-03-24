import { Injectable } from '@nestjs/common';
import { from, map } from 'rxjs';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../common/interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  validateUser(username: string, password: string) {
    const sourceUser = this.usersService
      .findByUnique({
        where: {
          username,
        },
      })
      .pipe(
        map((user) => {
          if (user && bcrypt.compare(password, user.passwordHash)) {
            delete user.passwordHash;
            return user;
          }
          return null;
        })
      );
    return sourceUser;
  }

  signIn(user: User) {
    const payload: JwtPayload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      isVerified: user.isVerified,
      role: user.role,
      createdAt: user.createdAt,
    };

    const sourceToken = from(this.jwtService.signAsync(payload)).pipe(
      map((token) => ({
        accessToken: token,
      }))
    );
    return sourceToken;
  }
}
