import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPermsOutDto } from './dto/user-perms-out.dto';
import { UserOutDto } from './dto/user-out.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private model: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.model(createUserDto);
    return await createdUser.save();
  }

  async findAll() {
    return await this.model.find().exec();
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return await this.model.findOne({ username: username });
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.model.findOne({ email: email });
  }

  async findUserPermissions(
    username: string,
  ): Promise<UserPermsOutDto | undefined> {
    return await this.model
      .findOne({ username: username })
      .select('role isSuperUser isStaff');
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.model.findByIdAndUpdate(id, updateUserDto, {
      upsert: true,
      projection: 'profile',
    });
    // TODO: project so that only needed things come
    // dto based easy writing of projections figure out
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
