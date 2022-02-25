import { Module } from '@nestjs/common';
import { DatabaseModule } from '@indev/db';
import { DokkuModule } from '@indev/dokku';
import { AppsModule } from './apps/apps.module';
import { LetsencryptModule } from './letsencrypt/letsencrypt.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    DokkuModule.forRoot(),
    AppsModule,
    LetsencryptModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class RootModule {}
