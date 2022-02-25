import { DokkuService } from '@indev/dokku';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class LetsencryptService {
  constructor(private readonly dokkuService: DokkuService) {}

  enable(name: string) {
    return this.dokkuService.runCommand(`letsencrypt:enable ${name}`).pipe(
      map((val) => ({
        logs: val.split('\n'),
      }))
    );
  }

  disable(name: string) {
    return this.dokkuService.runCommand(`letsencrypt:disable ${name}`).pipe(
      map(() => ({
        message: 'successfully disabled letsencrypt',
      }))
    );
  }

  list() {
    return this.dokkuService.runCommand('letsencrypt:list').pipe(
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
