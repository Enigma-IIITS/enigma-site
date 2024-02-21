import { PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';

export class EventResponseDto extends PartialType(CreateEventDto) {}
