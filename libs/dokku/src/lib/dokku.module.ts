import { DynamicModule, Module } from '@nestjs/common';
import { DokkuOptionsRegister } from './common/interfaces';
import { AppsService } from './services/apps.service';
import { LetsencryptService } from './services/letsencrypt.service';

@Module({})
export class DokkuModule {
  static options: DokkuOptionsRegister;
  static forRoot(options?: DokkuOptionsRegister): DynamicModule {
    const providers = [AppsService, LetsencryptService];
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
        ...providers,
      ],
      exports: [...providers],
    };
  }
}
