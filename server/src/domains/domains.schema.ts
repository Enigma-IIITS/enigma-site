import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClubDomainDocument = HydratedDocument<ClubDomain>;

@Schema()
export class ClubDomain {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  slug: string;
  @Prop()
  description: string;
  @Prop()
  coverimageLink: string;
}

export const ClubDomainSchema = SchemaFactory.createForClass(ClubDomain);
