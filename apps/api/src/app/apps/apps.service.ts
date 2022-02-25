import { DokkuService } from '@indev/dokku';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppsService {
  constructor(private readonly dokkuService: DokkuService) {}

  create(name: string) {
    return this.dokkuService.runCommand(`apps:create ${name}`).pipe(
      map(() => ({
        message: `${name} successfully created`,
      }))
    );
  }

  detail(name: string) {
    return this.dokkuService.runCommand(`apps:report ${name}`).pipe(
      map((val) => {
        const tmpApps = val.split('\n');
        tmpApps.shift();
        const apps = [];
        tmpApps.forEach((e) => {
          const arrayToParser = e.replace(/\s+/g, '\n').trim().split('\n');
          apps.push(arrayToParser);
        });
        return {
          createAt: apps[0][apps[0].length - 1],
          source: apps[1][apps[1].length - 1],
          metadata: apps[2][apps[2].length - 1],
          locked: apps[4][apps[4].length - 1],
        };
      })
    );
  }

  list() {
    return this.dokkuService.runCommand('apps:list').pipe(
      map((val) => {
        const apps = val.split('\n');
        apps.shift();
        return apps;
      })
    );
  }

  destroy(name: string) {
    return this.dokkuService.runCommand(`--force apps:destroy ${name}`).pipe(
      map(() => ({
        message: `${name} successfully destroyed`,
      }))
    );
  }

  logs(name: string) {
    return this.dokkuService.runCommand(`logs ${name}`).pipe(
      map((val) => {
        if (val.includes('\n')) {
          return val.split('\n');
        }
        return val;
      })
    );
  }
}
