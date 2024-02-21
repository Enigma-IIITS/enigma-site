import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

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

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return await this.model.findByIdAndUpdate(id, UpdateUserDto, {
      upsert: true,
    });
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
