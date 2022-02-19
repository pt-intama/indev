import { DBModule } from '@indev/db';
import { Module } from '@nestjs/common';

@Module({ imports: [DBModule] })
export class AuthModule {}
