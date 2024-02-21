import { FindAllDto } from '../../dto/find-all.dto';

export class FindEventsFilter {
  completed?: boolean;
  acceptingRegistrations?: boolean;
  dateRangeBegin?: Date;
  dateRangeEnd?: Date;
}

export default class FindAllEventsDto extends FindAllDto {
  applyFilters: FindEventsFilter;
}
