import { Controller, Get, Query, Put, Param, Delete } from '@nestjs/common';

export class ListAllEntities {
  limit: number;
}

@Controller('domains')
export class DomainsController {
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return 'find by slug' + slug;
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return 'list all entities limit by' + query;
  }

  @Put(':slug')
  update(@Param('slug') slug: string) {
    return 'update ' + slug;
  }
  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return 'delete ' + slug;
  }
}
