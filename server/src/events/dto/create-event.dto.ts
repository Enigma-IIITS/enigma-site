import { CoverImage } from 'src/entities/cover-image.entity';

export class SponsorDto {
  sponsorName: string;
  logo?: string;
  url?: string;
}

export class CreateEventDto {
  title: string;

  slug: string;

  summary?: string;

  coverImage?: CoverImage;

  startDateTime?: Date;

  endDateTime?: Date;

  venue?: string;

  eventType?: string;

  sponsors?: SponsorDto[];

  socialMediaPosts?: string[];

  description?: string;

  acceptRegistrations?: boolean;

  completed?: boolean;

  managers?: string[];

  organizers?: string[];

  volunteers?: string[];

  gallery?: string[];
}
