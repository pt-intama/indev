import { IDokkuConfig } from '@indev/dokku';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller()
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

  @Patch('/:name/config')
  updateConfig(@Param('name') name: string, @Body() data: unknown) {
    return this.appsService.updateConfig(name, data as IDokkuConfig[]);
  }

  @Patch('/:name/config/:configName')
  removeConfig(@Param('name') name: string, @Body() configNames: string[]) {
    return this.appsService.removeConfig(name, configNames);
  }

  @Delete('/:name')
  destroyApp(@Param('name') name: string) {
    return this.appsService.destroyApp(name);
  }
}
