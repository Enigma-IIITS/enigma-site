import { MemberRoleD, DomainRoleD } from '../entities/team.entity';

export class CreateTeamDto {
  academicYear: string;
  leads?: MemberRoleD[];
  coleads?: MemberRoleD[];
  domains?: DomainRoleD[];
}
