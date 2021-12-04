import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  eventName: string;

  @IsNotEmpty()
  location: string;
}
