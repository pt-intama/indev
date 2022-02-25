import { Module } from '@nestjs/common';
import { DatabaseModule } from '@indev/db';
import { DokkuModule } from '@indev/dokku';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters';

@Module({
  imports: [DatabaseModule.forRoot(), DokkuModule.forRoot()],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
