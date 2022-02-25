import { Module } from '@nestjs/common';
import { LetsencryptController } from './letsencrypt.controller';
import { LetsencryptService } from './letsencrypt.service';

@Module({
  controllers: [LetsencryptController],
  providers: [LetsencryptService],
  exports: [LetsencryptService],
})
export class LetsencryptModule {}
