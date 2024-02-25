import { FileMeta } from '../files.schema';

export class CreateFileDto {
  fileName: string;
  purpose?: string;
  uploader: string;
  uploadedOn: Date;
  meta: FileMeta;
}
