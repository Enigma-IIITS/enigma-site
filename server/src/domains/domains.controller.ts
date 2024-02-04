import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { ClubDomainsService } from './domains.service';
import { CreateClubDomainDto } from './domains.dto';

@Controller('domains')
export class DomainsController {
  constructor(private readonly service: ClubDomainsService) {}

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return this.service.findOne(slug);
  }
  @Post()
  async create(@Body() createDomainDto: CreateClubDomainDto) {
    return await this.service.create(createDomainDto);
  }
  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Put(':slug')
  async update(@Body() updateDomainDto: CreateClubDomainDto) {
    return await this.service.update(updateDomainDto);
  }
  @Delete(':slug')
  async remove(@Param('slug') slug: string) {
    return await this.service.remove(slug);
  }
}
