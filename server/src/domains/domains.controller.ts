import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Body,
  Patch,
} from '@nestjs/common';
import { ClubDomainsService } from './domains.service';
import { CreateClubDomainDto } from './dto/create-domain.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClubDomainResponse } from './dto/domain-response.dto';
import { Public } from 'src/auth/public.decorator';

@ApiBearerAuth()
@ApiTags('domains')
@Controller('domains')
export class DomainsController {
  constructor(private readonly service: ClubDomainsService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get details of all domains' })
  async findAll(): Promise<ClubDomainResponse[]> {
    return await this.service.findAll();
  }

  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Get details of a particular domain' })
  async findOne(@Param('slug') slug: string): Promise<ClubDomainResponse> {
    return this.service.findOne(slug);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new domain' })
  async create(
    @Body() createDomainDto: CreateClubDomainDto,
  ): Promise<ClubDomainResponse> {
    return await this.service.create(createDomainDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update details of an existing domain' })
  async update(
    @Param('id') id: string,
    @Body() updateDomainDto: CreateClubDomainDto,
  ): Promise<ClubDomainResponse> {
    return await this.service.update(id, updateDomainDto);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a particular domain by its id' })
  async remove(@Param('id') id: string): Promise<ClubDomainResponse> {
    return await this.service.remove(id);
  }
}
