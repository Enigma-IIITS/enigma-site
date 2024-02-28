import { PartialType } from '@nestjs/swagger';
import { CreateTeamDto } from './create-team.dto';

export class TeamResponseDto extends PartialType(CreateTeamDto) {}
