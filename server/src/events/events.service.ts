import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Event, EventDocument } from './events.schema';
import FindAllEventsDto from './dto/find-all-events.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name)
    private model: Model<EventDocument>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.model(createEventDto);
    return await createdEvent.save();
  }

  async findAll(params: FindAllEventsDto): Promise<Event[]> {
    console.log(params);
    return await this.model.find().exec();
  }

  async findOne(slug: string): Promise<Event> {
    return await this.model.findOne({ slug: slug });
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    return await this.model.findByIdAndUpdate(id, updateEventDto, {
      upsert: true,
    });
  }

  async remove(id: string): Promise<Event> {
    return await this.model.findByIdAndDelete(id);
  }
}
