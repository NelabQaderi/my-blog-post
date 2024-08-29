import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth Service')
@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  create(
    @Body()
    createAuthDto: CreateAuthDto,
  ) {
    return this.authService.login(createAuthDto);
  }

  @Get('search_user/:email')
  searchUser(@Param('email') email: string) {
    return this.authService.searchUser(email);
  }

  @Put('update_ueser/:email')
  updateUser(
    @Param('email') email: string,
    @Body() updateAuthDto: UpdateAuthDto,
  ) {
    return this.authService.updateUser(email, updateAuthDto);
  }

  @Delete('delete_user/:email')
  deleteUser(@Param('email') email: string) {
    return this.authService.deleteUser(email);
  }

  @Delete('soft-delete_user/:email')
  softDeleteUser(@Param('email') email: string) {
    return this.authService.softDeleteUser(email);
  }
}
