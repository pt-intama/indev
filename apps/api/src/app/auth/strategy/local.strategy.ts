import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { lastValueFrom } from 'rxjs';
import { User } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await lastValueFrom(
      this.authService.validateUser(username, password)
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
