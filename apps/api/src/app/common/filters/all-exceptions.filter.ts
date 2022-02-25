import { DokkuErrorStatus, DokkuException } from '@indev/dokku';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    let httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = (exception as Error).message;

    let logs = undefined;
    if (exception instanceof DokkuException) {
      if (exception.status === DokkuErrorStatus.NOT_EXISTS) {
        httpStatus = HttpStatus.NOT_FOUND;
      } else if (exception.status === DokkuErrorStatus.ALREADY_TAKEN) {
        httpStatus = HttpStatus.CONFLICT;
      } else if (
        exception.status === DokkuErrorStatus.NOT_YET_DEPLOYED ||
        exception.status === DokkuErrorStatus.LETSENCRYPT_MANY_REGISTRATION
      ) {
        httpStatus = HttpStatus.BAD_REQUEST;
      } else {
        logs = exception.logs;
      }
    }

    const responseBody = {
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message,
      logs,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
