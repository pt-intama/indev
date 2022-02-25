import { DokkuErrorStatus } from '../enums';

export class DokkuException extends Error {
  public logs: string;
  public status: DokkuErrorStatus;

  constructor(message?: string) {
    super(message);
    this.createBody();
  }

  public createBody() {
    const tmpMessage = this.message.replace(/ {5}|!/gi, '');

    if (tmpMessage.includes('not exist')) {
      this.message = 'Name does not exist';
      this.status = DokkuErrorStatus.NOT_EXISTS;
    } else if (tmpMessage.includes('already taken')) {
      this.message = 'Name has been taken';
      this.status = DokkuErrorStatus.ALREADY_TAKEN;
    } else if (tmpMessage.includes('nginx.service failed')) {
      this.message = 'App is not yet deployed';
      this.status = DokkuErrorStatus.NOT_YET_DEPLOYED;
    } else if (tmpMessage.includes('urn:ietf:params:acme:error:rateLimited')) {
      this.message = 'Letsencrypt usage limit per domain';
      this.status = DokkuErrorStatus.LETSENCRYPT_MANY_REGISTRATION;
    } else {
      this.message = 'Unknown error';
      this.status = DokkuErrorStatus.UNKNOWN_ERROR;
    }

    this.logs = tmpMessage;
  }

  toJson(): { message: string; status: DokkuErrorStatus } {
    return {
      message: this.message,
      status: this.status,
    };
  }
}
