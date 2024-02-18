import { FindAllDto } from 'src/dto/find-all.dto';

export type FindEventsFilter = {
  completed?: boolean;
  acceptingRegistrations?: boolean;
  dateRangeBegin?: Date;
  dateRangeEnd?: Date;
};

export default class FindAllEventsDto extends FindAllDto<FindEventsFilter> {}
