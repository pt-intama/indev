import { Module } from '@nestjs/common';
import { DatabaseModule } from '@indev/db';
import { DokkuModule } from '@indev/dokku';
import { AppModule } from './app/app.module';

@Module({
  imports: [DatabaseModule.forRoot(), DokkuModule.forRoot(), AppModule],
})
export class RootModule {}
