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
import { Public } from 'src/auth/public.decorator';
import { Roles } from 'src/auth/roles.decorator';
import { URoles } from 'src/users/users.schema';

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
  @Roles(URoles.lead, URoles.advisor, URoles.domain_lead)
  async create(@Body() createEventDto: CreateEventDto) {
    return await this.eventsService.create(createEventDto);
  }

  @Patch(':id')
  @Roles(URoles.lead, URoles.advisor, URoles.domain_lead)
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<EventResponseDto> {
    return await this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  @Roles(URoles.lead, URoles.advisor, URoles.domain_lead)
  remove(@Param('id') id: string): Promise<EventResponseDto> {
    return this.eventsService.remove(id);
  }
}
