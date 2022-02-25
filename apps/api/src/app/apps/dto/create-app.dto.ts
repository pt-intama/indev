import { IsAlphanumeric } from 'class-validator';

export class CreateAppDto {
  @IsAlphanumeric()
  name: string;
}
