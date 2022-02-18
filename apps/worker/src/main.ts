/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DBService } from '@indev/db';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const port = parseInt(process.env.PORT) || 4444;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: port,
      },
    }
  );
  const db: DBService = app.get(DBService);
  db.enableShutdownHooks(app);
  app.useGlobalPipes(new ValidationPipe());
  app.listen();
  Logger.log(`🚀 Application is running on: tcp://localhost:${port}`);
}

bootstrap();
