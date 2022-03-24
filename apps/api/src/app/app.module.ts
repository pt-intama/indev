import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@indev/db';
import { DokkuModule } from '@indev/dokku';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters';
import { AuthModule } from './auth/auth.module';
import { AppsModule } from './apps/apps.module';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    DokkuModule.forRoot(),
    ConfigModule.forRoot(),
    AuthModule,
    AppsModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
