import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/public.decorator';
import { UserOutDto } from './dto/user-out.dto';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Public()
  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.service.findOneByUsername(username);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserOutDto> {
    return this.service.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
