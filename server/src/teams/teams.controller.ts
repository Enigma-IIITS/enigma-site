import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/public.decorator';
import { Roles } from 'src/auth/roles.decorator';
import { URoles } from 'src/users/users.schema';
import { ApiOperation } from '@nestjs/swagger';
import { TeamResponseDto } from './dto/team-out.dto';

@ApiBearerAuth()
@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Public()
  @Get()
  @ApiOperation({
    summary: 'Get details of entire teams of all academic years',
  })
  findAll(): Promise<TeamResponseDto[]> {
    return this.teamsService.findAll();
  }

  @Public()
  @Get(':academicYear')
  @ApiOperation({ summary: 'Get details of a specific academic year' })
  findOne(
    @Param('academicYear') academicYear: string,
  ): Promise<TeamResponseDto> {
    return this.teamsService.findOne(academicYear);
  }

  @Post()
  @Roles(URoles.advisor, URoles.lead)
  @ApiOperation({ summary: 'Create new team entry for an academic year' })
  create(@Body() createTeamDto: CreateTeamDto): Promise<TeamResponseDto> {
    return this.teamsService.create(createTeamDto);
  }

  @Patch(':id')
  @Roles(URoles.advisor, URoles.lead)
  @ApiOperation({ summary: 'Modify existing team entry for an academic year' })
  update(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<TeamResponseDto> {
    return this.teamsService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @Roles(URoles.advisor, URoles.lead)
  @ApiOperation({ summary: 'Delete existing team entry for an academic year' })
  remove(@Param('id') id: string): Promise<TeamResponseDto> {
    return this.teamsService.remove(id);
  }
}
