import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: DatabaseModule,
      providers: [DatabaseService],
      exports: [DatabaseService],
    };
  }
}
