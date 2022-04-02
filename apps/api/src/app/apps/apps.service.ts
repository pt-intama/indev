import {
  DokkuAppsService,
  DokkuConfigService,
  DokkuDomainsService,
  DokkuLetsencryptService,
  IDokkuConfig,
} from '@indev/dokku';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppsService {
  constructor(
    private readonly apps: DokkuAppsService,
    private readonly domains: DokkuDomainsService,
    private readonly config: DokkuConfigService,
    private readonly letsencrypt: DokkuLetsencryptService
  ) {}

  async createApp(name: string, config: IDokkuConfig[]) {
    await lastValueFrom(this.apps.create(name));
    const globalDomain = await lastValueFrom(this.domains.getGlobalDomain());
    await lastValueFrom(this.domains.set(name, `${name}.${globalDomain}`));
    await lastValueFrom(this.letsencrypt.enable(name));
    await lastValueFrom(this.config.set(name, config));
    return {
      git: `dokku@${globalDomain}:${name}`,
      domain: `${name}.${globalDomain}`,
    };
  }

  list() {
    return this.apps.list();
  }

  async detail(name: string) {
    const detail = await lastValueFrom(this.apps.detail(name));
    const domain = await lastValueFrom(this.domains.report(name));
    const config = await lastValueFrom(this.config.list(name));
    const globalDomain = await lastValueFrom(this.domains.getGlobalDomain());
    const git = `dokku@${globalDomain}:${name}`;
    return Object.assign(detail, {
      domain,
      config,
      git,
    });
  }

  updateConfig(name: string, config: IDokkuConfig[]) {
    return this.config.set(name, config);
  }

  removeConfig(name: string, configNames: string[]) {
    return this.config.unset(name, configNames);
  }

  destroyApp(name: string) {
    return this.apps.destroy(name);
  }
}
