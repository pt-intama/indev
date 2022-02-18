import { DBService } from '@indev/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private dbService: DBService) {}
}
