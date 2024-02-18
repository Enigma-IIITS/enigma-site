export class FindAllDto<FindFilter> {
  page: number;
  searchFor: string;
  applyFilters: FindFilter;
}
