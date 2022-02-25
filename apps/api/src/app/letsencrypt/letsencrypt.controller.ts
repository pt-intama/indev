import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EnableLetsencryptDto } from './dto/enable-letsencrypt.dto';
import { LetsencryptService } from './letsencrypt.service';

@Controller('letsencrypt')
export class LetsencryptController {
  constructor(private readonly letsencryptService: LetsencryptService) {}

  @Get()
  listLetsencrypt() {
    return this.letsencryptService.list();
  }

  @Post()
  enableLetsencrypt(@Body() enableLetsencryptDto: EnableLetsencryptDto) {
    return this.letsencryptService.enable(enableLetsencryptDto.name);
  }

  @Delete('/:name')
  disableLetsencrypt(@Param('name') name: string) {
    return this.letsencryptService.disable(name);
  }
}
