import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { AbstractService } from './abstract.service';

@Injectable()
export class DokkuLetsencryptService extends AbstractService {
  enable(name: string) {
    return this.handle(`letsencrypt:enable ${name}`).pipe(
      map((val) => ({
        logs: val.split('\n'),
      }))
    );
  }

  disable(name: string) {
    return this.handle(`letsencrypt:disable ${name}`).pipe(
      map(() => ({
        message: 'successfully disabled letsencrypt',
      }))
    );
  }

  list() {
    return this.handle('letsencrypt:list').pipe(
      map((val) => {
        const tmpLetsencrypt = val.split('\n');
        tmpLetsencrypt.shift();
        const letsencrypt = [];
        tmpLetsencrypt.forEach((e) => {
          const arrayToParser = e.replace(/\s+/g, '\n').trim().split('\n');
          letsencrypt.push({
            name: arrayToParser[0],
            expired: arrayToParser[1] + ' ' + arrayToParser[2],
          });
        });
        return letsencrypt;
      })
    );
  }
}
