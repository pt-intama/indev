import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { AbstractService } from './abstract.service';

@Injectable()
export class DokkuDomainsService extends AbstractService {
  add(name: string, domainName: string) {
    return this.handle(`domains:add ${name} ${domainName}`).pipe(
      map(() => ({ message: 'successfully added domain' }))
    );
  }

  getGlobalDomain() {
    return this.handle(`domains:report --global --domains-global-vhosts`);
  }

  report(name?: string) {
    return this.handle(
      `domains:report ${name ? name : ''} --domains-app-vhosts`
    ).pipe(
      map((domains) => {
        const tmpDomains = [];
        domains.split('\n').forEach((domain) => {
          if (domain.includes(' ')) {
            domain.split(' ').forEach((e) => {
              tmpDomains.push(e);
            });
          } else {
            tmpDomains.push(domain);
          }
        });
        return tmpDomains;
      })
    );
  }

  set(name: string, domainName: string) {
    return this.handle(`domains:set ${name} ${domainName}`);
  }
}
