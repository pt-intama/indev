import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppsService } from './apps.service';
import { CreateAppDto } from './dto/create-app.dto';

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Post()
  createApps(@Body() createAppDto: CreateAppDto) {
    return this.appsService.create(createAppDto.name);
  }

  @Get()
  listApps() {
    return this.appsService.list();
  }

  @Get('/:name')
  detailApps(@Param('name') name: string) {
    return this.appsService.detail(name);
  }

  @Delete('/:name')
  destroyApps(@Param('name') name: string) {
    return this.appsService.destroy(name);
  }

  @Get('/logs/:name')
  getLogs(@Param('name') name: string) {
    return this.appsService.logs(name);
  }
}
