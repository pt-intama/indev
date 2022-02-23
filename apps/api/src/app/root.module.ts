import { Module } from '@nestjs/common';
import { DatabaseModule } from '@indev/db';
import { DokkuModule } from '@indev/dokku';
import { AppsModule } from './apps/apps.module';

@Module({
  imports: [DatabaseModule.forRoot(), DokkuModule.forRoot(), AppsModule],
})
export class RootModule {}
