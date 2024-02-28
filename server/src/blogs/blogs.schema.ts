import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CoverImage } from 'src/entities/cover-image.entity';

@Schema()
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, index: true, unique: true })
  slug: string;

  @Prop({ required: true })
  author: string; // id of user who created this blog

  @Prop()
  coAuthors: string[]; // ids[] of collaborators

  @Prop({ required: true })
  summary: string;

  @Prop()
  coverImage: CoverImage;

  @Prop({ required: true })
  created: Date;

  @Prop({ required: true })
  lastUpdated: Date;

  @Prop({ required: true })
  tags: string[];

  @Prop({ required: true })
  domains: string[]; // ids[] of domains

  @Prop({ required: true })
  content: string;

  @Prop({ required: true, default: false })
  isPublic: boolean;
}

export type BlogDocument = HydratedDocument<Blog>;
export const BlogSchema = SchemaFactory.createForClass(Blog);
