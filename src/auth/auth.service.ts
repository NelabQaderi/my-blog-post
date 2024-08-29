import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
  ) {}
  async login(createAuthDto: CreateAuthDto) {
    const newUsuer = await this.authRepository.create(createAuthDto);
    await this.authRepository.save(newUsuer);
    return {
      message: 'User has been created successfully.',
      user: newUsuer,
    };
  }
  async searchUser(email: string) {
    const GetUsuerData = await this.authRepository.findOne({
      where: { email: email },
    });

    if (!GetUsuerData) {
      return { message: 'User not found' };
    }

    return {
      message: 'user found successfully',
      user: GetUsuerData,
    };
  }
  async updateUser(email: string, updateUserDto: UpdateAuthDto) {
    const UserData = await this.authRepository.findOne({
      where: { email: email },
    });

    if (!UserData) {
      return {
        message: 'User not found',
      };
    }

    const newData = await this.authRepository.update(
      UserData.id,
      updateUserDto,
    );

    return {
      message: 'User updated successfully',
      newData,
    };
  }

  async deleteUser(email: string) {
    const UserData = await this.authRepository.findOne({
      where: { email: email },
    });

    if (!UserData) {
      return {
        message: 'User not found',
      };
    }

    await this.authRepository.delete(UserData.id);

    return {
      message: 'User deleted successfully',
    };
  }

  async softDeleteUser(email: string) {
    const UserData = await this.authRepository.findOne({
      where: { email: email },
    });

    if (!UserData) {
      return {
        message: 'User not found',
      };
    }

    await this.authRepository.softDelete(UserData.id);

    return {
      message: 'User deleted successfully',
    };
  }
}
