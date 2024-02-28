import { PartialType } from '@nestjs/swagger';
import { CreateBlogDto } from './create-blog.dto';

export class BlogResponseDto extends PartialType(CreateBlogDto) {
  author: string; // id of user who created this blog
  created: Date;
  lastUpdated: Date;
}
