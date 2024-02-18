import { CreateClubDomainDto } from './create-domain.dto';
import { PartialType } from '@nestjs/swagger';

export class ClubDomainResponse extends PartialType(CreateClubDomainDto) {}
