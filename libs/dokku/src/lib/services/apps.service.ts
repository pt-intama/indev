import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { AbstractService } from './abstract.service';

@Injectable()
export class DokkuAppsService extends AbstractService {
  create(name: string) {
    return this.handle(`apps:create ${name}`).pipe(
      map(() => ({
        message: `${name} successfully created`,
      }))
    );
  }

  detail(name: string) {
    return this.handle(`apps:report ${name}`).pipe(
      map((val) => {
        const tmpApps = val.split('\n');
        const apps = [];
        tmpApps.forEach((e) => {
          const arrayToParser = e.replace(/\s+/g, '\n').trim().split('\n');
          apps.push(arrayToParser);
        });
        const createdAt = apps[0][apps[0].length - 1];
        const source = apps[1][apps[1].length - 1];
        const metadata = apps[2][apps[2].length - 1];
        const locked = apps[4][apps[4].length - 1];
        return {
          createdAt,
          source: source === 'source:' ? undefined : source,
          metadata: metadata === 'metadata:' ? undefined : metadata,
          locked,
        };
      })
    );
  }

  list() {
    return this.handle(`apps:list`).pipe(map((val) => val.split('\n')));
  }

  destroy(name: string) {
    return this.handle(`--force apps:destroy ${name}`).pipe(
      map(() => ({ message: 'successfully destroyed' }))
    );
  }

  logs(name: string) {
    return this.handle(`logs ${name}`).pipe(
      map((val) => {
        if (val.includes('\n')) {
          return val.split('\n');
        }
        return val;
      })
    );
  }
}
