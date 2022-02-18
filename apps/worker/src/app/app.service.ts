import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
