import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { FileMeta as FileMetaEntity } from './entities/file-meta.entity';

@Schema()
export class FileMeta extends FileMetaEntity {}

@Schema()
export class FileObject {
  @Prop({
    required: true,
    index: true,
    unique: true,
  })
  fileName: string;

  @Prop()
  purpose: string;

  @Prop({ required: true })
  uploader: string;

  @Prop({ required: true })
  uploadedOn: Date;

  @Prop({ required: true })
  meta: FileMeta;
}

export type FileObjectDocument = HydratedDocument<FileObject>;
export const FileObjectSchema = SchemaFactory.createForClass(FileObject);
