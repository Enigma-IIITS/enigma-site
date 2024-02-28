import { CoverImage } from 'src/entities/cover-image.entity';

export class CreateBlogDto {
  title: string;
  slug: string;
  coAuthors: string[]; // ids[] of collaborators
  summary: string;
  coverImage: CoverImage;
  tags: string[];
  domains: string[]; // ids[] of domains
  content: string;
  isPublic: boolean;
}
