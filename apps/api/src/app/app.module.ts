import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DatabaseModule } from '@indev/db';
import { DokkuModule } from '@indev/dokku';
import { APP_FILTER, RouterModule } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters';
import { AuthModule } from './auth/auth.module';
import { AppsModule } from './apps/apps.module';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    DokkuModule.forRoot(),
    ConfigModule.forRoot(),
    AppsModule,
    AuthModule,
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    RouterModule.register([
      {
        path: 'api',
        children: [
          {
            path: 'apps',
            module: AppsModule,
          },
          {
            path: 'auth',
            module: AuthModule,
          },
          {
            path: 'users',
            module: UsersModule,
          },
        ],
      },
    ]),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
