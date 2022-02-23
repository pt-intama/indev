import { Module } from '@nestjs/common';
import { AppsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppsController],
  providers: [AppService],
})
export class AppModule {}
