import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClubDomain, ClubDomainDocument } from './domains.schema';
import { CreateClubDomainDto } from './domains.dto';

@Injectable()
export class ClubDomainsService {
  constructor(
    @InjectModel(ClubDomain.name)
    private model: Model<ClubDomainDocument>,
  ) {}

  async create(createClubDomainDto: CreateClubDomainDto): Promise<ClubDomain> {
    const createdClubDomain = new this.model(createClubDomainDto);
    return createdClubDomain.save();
  }

  async findAll(): Promise<ClubDomain[]> {
    return await this.model.find().exec();
  }

  async findOne(slug: string): Promise<ClubDomain> {
    return await this.model.findOne({ slug: slug });
  }

  async update(updateDomainDto: CreateClubDomainDto): Promise<ClubDomain> {
    return await this.model
      .findOneAndUpdate({ slug: updateDomainDto.slug }, updateDomainDto)
      .exec();
  }

  async remove(slug: string): Promise<ClubDomain> {
    return await this.model.findOneAndDelete({ slug: slug });
  }
}
