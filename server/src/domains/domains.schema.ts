import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class ClubDomain {
  @Prop({ required: true })
  domainName: string;

  @Prop({ required: true, index: true, unique: true })
  slug: string;

  @Prop()
  description: string;

  @Prop()
  coverImageLink: string;
}

export type ClubDomainDocument = HydratedDocument<ClubDomain>;

export const ClubDomainSchema = SchemaFactory.createForClass(ClubDomain);
