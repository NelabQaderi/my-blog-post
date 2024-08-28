import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateAuthDto {
  @ApiProperty({ example: 'john-doe' })
  username?: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  email?: string;

  @ApiProperty({ example: 'john123' })
  password?: string;
}
