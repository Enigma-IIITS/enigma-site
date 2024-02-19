import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

import bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { RegisterResponseDto } from './dto/register-response.dto';
import { saltRounds } from './constants';
import { SignInResponseDto } from './dto/sign-in-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<SignInResponseDto> {
    const user = await this.usersService.findOneByUsername(username);
    const match = await bcrypt.compare(password, user?.hashedPassword);

    if (!match) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.email, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<RegisterResponseDto> {
    const user = await this.usersService.create({
      username: registerDto.username,
      email: registerDto.email,
      fullName: registerDto.fullName,
      hashedPassword: await bcrypt.hash(registerDto.password, saltRounds),
    });

    const payload = { sub: user.email, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
