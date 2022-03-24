import { Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DokkuOptionsRegister } from '../common/interfaces';
import { DokkuCore } from '../core';

export abstract class AbstractService extends DokkuCore {
  constructor(@Inject('DOKKU_OPTIONS') options: DokkuOptionsRegister) {
    super(options.socketPath);
  }

  protected handle(command: string): Observable<string> {
    return super.handle(`--quiet ${command}`);
  }
}
