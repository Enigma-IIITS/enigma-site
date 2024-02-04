import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClubDomain } from './domains.schema';
import { CreateClubDomainDto } from './create-domain.dto';

@Injectable()
export class ClubDomainsService {
  constructor(
    @InjectModel(ClubDomain.name) private clubDomainModel: Model<ClubDomain>,
  ) {}

  async create(createClubDomainDto: CreateClubDomainDto): Promise<ClubDomain> {
    const createdClubDomain = new this.clubDomainModel(createClubDomainDto);
    return createdClubDomain.save();
  }

  async findAll(): Promise<ClubDomain[]> {
    return this.clubDomainModel.find().exec();
  }
}
