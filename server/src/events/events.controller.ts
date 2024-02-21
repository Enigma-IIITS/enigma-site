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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EventResponseDto } from './dto/event-response.dto';
import FindAllEventsDto from './dto/find-all-events.dto';
import { Public } from 'src/auth/public';

@ApiBearerAuth()
@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Public()
  @Get()
  async findAll(@Body() params: FindAllEventsDto): Promise<EventResponseDto[]> {
    return await this.eventsService.findAll(params);
  }

  @Public()
  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<EventResponseDto> {
    return this.eventsService.findOne(slug);
  }

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return await this.eventsService.create(createEventDto);
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
