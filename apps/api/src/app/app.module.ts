import { DBModule } from '@indev/db';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
