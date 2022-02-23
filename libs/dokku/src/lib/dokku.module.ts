import { DynamicModule, Module } from '@nestjs/common';
import { DokkuOptionsRegister } from './common/interfaces';
import { DokkuService } from './dokku.service';

@Module({})
export class DokkuModule {
  static options: DokkuOptionsRegister;
  static forRoot(options?: DokkuOptionsRegister): DynamicModule {
    DokkuModule.options = options
      ? options
      : {
          socketPath: '/var/run/dokku-daemon/dokku-daemon.sock',
        };
    return {
      global: true,
      module: DokkuModule,
      providers: [
        {
          provide: 'DOKKU_OPTIONS',
          useValue: DokkuModule.options,
        },
        DokkuService,
      ],
      exports: [DokkuService],
    };
  }
}
