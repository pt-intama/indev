import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { Public } from '../common/decorators';
import { LocalAuthGuard } from '../common/guards';
import { JwtPayload } from '../common/interfaces';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  @UseGuards(LocalAuthGuard)
  signIn(@Request() req: unknown) {
    const user = req['user'] as User;
    return this.authService.signIn(user);
  }

  @Get()
  profile(@Request() req: unknown) {
    const user = req['user'] as JwtPayload;
    delete user.iat;
    delete user.exp;
    return user;
  }
}
