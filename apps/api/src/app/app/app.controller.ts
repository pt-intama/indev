import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('apps')
export class AppsController {
  constructor(private readonly appService: AppService) {}
}
