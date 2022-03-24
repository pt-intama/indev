import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Post()
  createApps(@Body() data: unknown) {
    return this.appsService.createApp(data['name'], data['config']);
  }

  @Get()
  list() {
    return this.appsService.list();
  }

  @Get('/:name')
  detail(@Param('name') name: string) {
    return this.appsService.detail(name);
  }

  @Delete('/:name')
  destroyApp(@Param('name') name: string) {
    return this.appsService.destroyApp(name);
  }
}
