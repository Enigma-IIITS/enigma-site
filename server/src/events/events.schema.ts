import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CoverImage } from 'src/entities/cover-image.entity';

@Schema()
export class Sponsor {
  sponsorName: string;
  logo: string;
  url: string;
}

@Schema()
export class Event {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, index: true })
  slug: string;

  @Prop()
  summary: string;

  @Prop()
  coverImage: CoverImage;

  @Prop()
  startDateTime: Date;

  @Prop()
  endDateTime: Date;

  @Prop()
  venue: string;

  @Prop()
  eventType: string;

  @Prop()
  sponsors: Sponsor[];

  @Prop()
  socialMediaPosts: string[];

  @Prop()
  description: string;

  @Prop()
  acceptingRegistrations: boolean;

  @Prop()
  completed: boolean;

  @Prop()
  managers: string[];

  @Prop()
  organizers: string[];

  @Prop()
  volunteers: string[];

  @Prop()
  gallery: string[];
}

export type EventDocument = HydratedDocument<Event>;
export const EventSchema = SchemaFactory.createForClass(Event);
