import { DokkuService } from '@indev/dokku';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppsService {
  constructor(private readonly dokkuService: DokkuService) {}
}
