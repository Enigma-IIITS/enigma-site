import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TeamDocument, Teams } from './teams.schema';
import { Model } from 'mongoose';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Teams.name)
    private model: Model<TeamDocument>,
  ) {}

  // while updating and creating
  // TODO validate if all domains ids are valid
  // TODO validate if all users ids are valid

  async create(createTeamDto: CreateTeamDto): Promise<Teams> {
    const createdTeam = new this.model(createTeamDto);
    return await createdTeam.save();
  }

  async findAll(): Promise<Teams[]> {
    return await this.model.find().exec();
  }

  async findOne(academicYear: string): Promise<Teams> {
    return await this.model.findOne({ academicYear: academicYear });
  }

  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Teams> {
    return await this.model.findByIdAndUpdate(id, updateTeamDto, {
      upsert: true,
    });
  }

  async remove(id: string): Promise<Teams> {
    return await this.model.findByIdAndDelete(id);
  }
}
