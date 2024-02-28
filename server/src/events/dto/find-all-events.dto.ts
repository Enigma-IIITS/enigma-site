import { DateRange } from 'src/entities/date-range.entity';
import { FindAllDto } from '../../dto/find-all.dto';

export class FindEventsFilter {
  completed?: boolean;
  acceptingRegistrations?: boolean;
  dateRange?: DateRange;
}

export default class FindAllEventsDto extends FindAllDto {
  applyFilters: FindEventsFilter;
}
