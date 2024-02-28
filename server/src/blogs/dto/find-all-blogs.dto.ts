import { DateRange } from 'src/entities/date-range.entity';
import { FindAllDto } from '../../dto/find-all.dto';

export class FindBlogsFilter {
  tags?: string[];
  authors?: string[];
  isPublic?: boolean;
  createdRange?: DateRange;
  lastEditedRange?: DateRange;
}

export class FindAllBlogsDto extends FindAllDto {
  applyFilters: FindBlogsFilter;
}
