import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { IDokkuConfig } from '../common/interfaces';
import { AbstractService } from './abstract.service';

@Injectable()
export class DokkuConfigService extends AbstractService {
  set(name: string, config: IDokkuConfig[]) {
    let command = `config:set ${name}`;
    config.forEach((e) => {
      command += ` ${e.name}=${e.value}`;
    });
    return this.handle(command).pipe(
      map(() => ({
        message: 'successfully set configuration',
      }))
    );
  }

  list(name: string) {
    return this.handle(`config:show ${name}`).pipe(
      map((val) => {
        const tempConfig = val.replace(/\s+/g, '\n').split(/\n/g);
        const config: IDokkuConfig[] = [];
        for (let i = 0; i < tempConfig.length; i++) {
          const splitString = tempConfig[i].split('');
          if (splitString[splitString.length - 1] === ':') {
            const name = tempConfig[i].replace(/:/gi, '');
            const value = tempConfig[i + 1];
            config.push({ name, value });
          } else {
            continue;
          }
        }
        return config;
      })
    );
  }

  reset(name: string) {
    return this.handle(`config:clear ${name}`).pipe(
      map(() => ({
        message: 'successfully reset configuration',
      }))
    );
  }

  unset(name: string, configName: string[]) {
    const configNameParam = configName.join(' ');
    const command = `config:unset ${name} ${configNameParam}`;
    return this.handle(command).pipe(
      map(() => ({
        message: 'successfully unset configuration',
      }))
    );
  }
}
