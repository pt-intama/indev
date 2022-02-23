import { DokkuService } from '@indev/dokku';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly dokkuService: DokkuService) {}
}
