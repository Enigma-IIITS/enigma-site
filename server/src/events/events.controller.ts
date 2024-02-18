import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiTags } from '@nestjs/swagger';
import { EventResponseDto } from './dto/event-response.dto';
import FindAllEventsDto from './dto/find-all.dto';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return await this.eventsService.create(createEventDto);
  }

  @Get('')
  async findAll(@Body() params: FindAllEventsDto): Promise<EventResponseDto[]> {
    return await this.eventsService.findAll(params);
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<EventResponseDto> {
    return this.eventsService.findOne(slug);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<EventResponseDto> {
    return await this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<EventResponseDto> {
    return this.eventsService.remove(id);
  }
}
